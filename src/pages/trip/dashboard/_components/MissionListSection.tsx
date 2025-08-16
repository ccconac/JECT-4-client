import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PlusIcon from '../../../../assets/icons/roundedPlus.svg?react';
import MissionCard, { type MissionItem } from '../_components/MissionCard';

interface MissionListSectionProps {
    missions: MissionItem[];
    allChecked: boolean;
    checkedCount: number;
    isEditMode: boolean;
    onToggleEditMode: () => void;
    onUpdateLabel: (id: string, value: string) => void;
    onDelete: (id: string) => void;
    onToggleCheck: (id: string) => void;
    onUpdateMissionOrder: (newMissions: MissionItem[]) => void;
}

const MissionListSection = ({
    missions,
    allChecked,
    checkedCount,
    isEditMode,
    onToggleEditMode,
    onUpdateLabel,
    onDelete,
    onToggleCheck,
    onUpdateMissionOrder,
}: MissionListSectionProps) => {
    const handleAddMission = useCallback(() => {
        const newMission: MissionItem = {
            id: uuidv4(),
            text: '',
            isEditing: true,
            isChecked: false,
        };

        const updatedMissions = [...missions, newMission];
        onUpdateMissionOrder(updatedMissions);
    }, [missions, onUpdateMissionOrder]);

    const handleToggleEdit = useCallback(
        (id: string) => {
            const updatedMissions = missions.map((mission) =>
                mission.id === id
                    ? { ...mission, isEditing: !mission.isEditing }
                    : mission
            );

            onUpdateMissionOrder(updatedMissions);
        },
        [missions, onUpdateMissionOrder]
    );

    return (
        <section className="pt-[3.25rem]">
            {/* 헤더 영역 */}
            <div className="flex items-center justify-between">
                <span className="text-body font-semibold">
                    {allChecked
                        ? '오늘의 미션을 모두 완료했어요!'
                        : missions.length
                          ? `오늘의 미션, ${missions.length - checkedCount}개 남았어요!`
                          : '오늘의 미션을 먼저 설정해 주세요!'}
                </span>
                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleEditMode}
                        className="cursor-pointer text-sm text-[#585858] underline"
                    >
                        {isEditMode ? '완료' : '편집'}
                    </button>
                    <button
                        type="button"
                        aria-label="미션 추가"
                        className="cursor-pointer"
                        onClick={handleAddMission}
                    >
                        <PlusIcon aria-hidden="true" />
                    </button>
                </div>
            </div>
            {/* 서브 텍스트 */}
            {allChecked && (
                <span className="text-sm text-[#585858]">
                    더 학습하고 싶다면 미션을 추가해 보세요.
                </span>
            )}

            <div className="flex h-[calc(100vh-25rem)] flex-col gap-3.5 overflow-y-auto px-0.5 py-4">
                {missions.length ? (
                    missions.map((mission, index) => (
                        <MissionCard
                            key={mission.id}
                            mission={mission}
                            isEditMode={isEditMode}
                            onChange={(id, value) => onUpdateLabel(id, value)}
                            onDelete={(id) => onDelete(id)}
                            onEditToggle={(id) => handleToggleEdit(id)}
                            onToggleCheck={(id) => onToggleCheck(id)}
                            index={index}
                        />
                    ))
                ) : (
                    <div className="flex h-[calc(100vh-25rem)] items-center justify-center">
                        <span className="text-body text-[#C6C5BF]">
                            + 버튼을 눌러 미션을 추가할 수 있어요
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MissionListSection;
