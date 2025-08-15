import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import MissionListSection from './_components/MissionListSection';
import MissionSummary from './_components/MissionSummary';
import { useDashboardMissions } from './_hooks/useDashboardMissions';
import ModalContainer from './_components/PomodoroTimer/ModalContainer';
import PomodoroTimer, {
    type TimeValue,
} from './_components/PomodoroTimer/PomodoroTimer';

import BackHeader from '../../../components/common/BackHeaderLayout';
import MainButton from '../../../components/common/button/MainButton';

import useCreateMission from '../../../hooks/mission/useCreateMission';
import useMissionsQuery from '../../../hooks/mission/useMissionQuery';

export default function DashboardPage() {
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);

    const {
        missions,
        allChecked,
        checkedCount,
        toggleCheck,
        updateLabel,
        deleteMission,
        addMission,
        setMissions,
    } = useDashboardMissions([]);

    const { tripId: tripIdParam } = useParams<{ tripId: string }>();
    const [searchParams] = useSearchParams();
    const stampIdParam = searchParams.get('stampId');

    const [open, setOpen] = useState(false);
    const [time, setTime] = useState<TimeValue>({ minute: '30', session: '1' });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validateId = (id: number) =>
        Number.isFinite(id) && id > 0 ? id : null;

    const id = useMemo(() => {
        const tripIdNumber = Number(tripIdParam);
        const stampIdNumber = Number(stampIdParam);
        return {
            tripId: validateId(tripIdNumber),
            stampId: validateId(stampIdNumber),
        };
    }, [tripIdParam, stampIdParam]);

    useEffect(() => {
        if (id.tripId === null || id.stampId === null) {
            alert('잘못된 여행 id입니다.');
            navigate(-1);
        }
    }, [id, navigate]);

    if (id.tripId === null || id.stampId === null) return null;

    const { mutate: createMission, isPending } = useCreateMission(
        id.tripId,
        id.stampId
    );

    const {
        data: missionData,
        isLoading,
        isError,
    } = useMissionsQuery(id.tripId, id.stampId);

    if (isLoading) return <div>로딩 중입니다...</div>;
    if (isError) alert('미션을 불러올 수 없습니다.');

    const handleAddMission = (name: string, memo: string, order: number) => {
        if (!name.trim()) return;
        createMission({ name: name.trim(), memo: memo ?? '', order });
    };

    const handleToggleEdit = (missionId: number) => {
        setMissions((prev) => {
            const target = prev.find(
                (mission) => mission.missionId === missionId
            );

            if (!target) return prev;

            const closing = target.completed;
            const next = prev.map((mission) =>
                mission.missionId === missionId
                    ? { ...mission, isEditing: !mission.completed }
                    : mission
            );

            if (closing) {
                const name = (target.missionName ?? '').trim();
                if (!name.length)
                    return next.filter((m) => m.missionId !== missionId);

                if (!isPending) {
                    handleAddMission(
                        name,
                        '',
                        target.missionOrder ?? calcNextOrder(prev)
                    );
                }
            }

            return next;
        });
    };

    const calcNextOrder = (list: { missionOrder?: number }[]) =>
        (list.reduce(
            (max, mission) => Math.max(max, mission.missionOrder ?? 0),
            0
        ) || 0) + 1;

    const handleConfirm = () => {
        setOpen(false);
        navigate('/pomodoro', { state: { time } });
    };

    return (
        <div className="relative flex min-h-screen flex-col">
            <div className="h-[4rem]">
                <BackHeader title="유형연습 Q8-10 복습" hideLogButton={false} />
            </div>

            <div className="flex-1 overflow-y-auto pt-3">
                <MissionSummary
                    missions={missionData!}
                    checkedCount={checkedCount}
                />
                <MissionListSection
                    missions={missionData!}
                    allChecked={allChecked}
                    checkedCount={checkedCount}
                    isEditMode={isEditMode}
                    onToggleEditMode={() => setIsEditMode((prev) => !prev)}
                    onAddMission={addMission}
                    onUpdateLabel={updateLabel}
                    onDelete={deleteMission}
                    onToggleEdit={handleToggleEdit}
                    onToggleCheck={toggleCheck}
                />
            </div>

            <div className="pb-6">
                <MainButton onClick={handleOpen} colorClass="bg-text-sub">
                    {allChecked ? '스탬프 완료하기' : '학습 시작하기'}
                </MainButton>
            </div>

            <ModalContainer
                open={open}
                title="뽀모도 시간"
                confirmText="완료"
                cancelText="취소"
                onClose={handleClose}
                onConfirm={handleConfirm}
            >
                <div className="flex items-center justify-center py-[2rem]">
                    <PomodoroTimer value={time} onChange={setTime} />
                </div>
            </ModalContainer>
        </div>
    );
}
