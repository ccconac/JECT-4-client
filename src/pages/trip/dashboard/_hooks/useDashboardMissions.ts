import { useState, useMemo, useCallback, useEffect } from 'react';
import { type MissionItem } from '../../../../types/mission/MissionItem';
import useDeleteMission from '../../../../hooks/mission/useDeleteMission';
import usePatchMission from '../../../../hooks/mission/usePatchMission';

export const useDashboardMissions = (
    tripId: number,
    stampId: number,
    initialFetchedMissions?:
        | Omit<MissionItem, 'isEditing' | 'isChecked'>[]
        | undefined
) => {
    const [missions, setMissions] = useState<MissionItem[]>([]);
    const [debouncedUpdate, setDebouncedUpdate] = useState<{
        id: number | string;
        value: string;
    } | null>(null);

    const { mutateDeleteMission } = useDeleteMission();
    const { mutatePatchMission } = usePatchMission();

    useEffect(() => {
        if (initialFetchedMissions) {
            const convertedMissions: MissionItem[] = initialFetchedMissions.map(
                (m) => ({
                    missionId: m.missionId,
                    missionName: m.missionName,
                    missionOrder: m.missionOrder,
                    completed: m.completed,
                    isEditing: false,
                    isChecked: false,
                })
            );
            setMissions(convertedMissions);
        }
    }, [initialFetchedMissions]);

    useEffect(() => {
        if (!debouncedUpdate) return;

        const handler = setTimeout(() => {
            const { id, value } = debouncedUpdate;

            if (typeof id === 'number') {
                mutatePatchMission({
                    tripId,
                    stampId,
                    missionId: id,
                    missionContent: { name: value, memo: '' },
                });
            }

            setDebouncedUpdate(null);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [debouncedUpdate, tripId, stampId, mutatePatchMission]);

    // 모든 미션이 완료되었는지 확인
    const allChecked = useMemo(
        () => missions.every((mission) => mission.completed),
        [missions]
    );

    const checkedMissionIds = useMemo(
        () =>
            missions
                .filter((mission) => mission.isChecked)
                .map((mission) => mission.missionId),
        [missions]
    );

    // 완료된 미션 개수 계산
    const checkedCount = useMemo(
        () => missions.filter((mission) => mission.completed).length,
        [missions]
    );

    // 미션 내용 업데이트
    const updateLabel = useCallback((id: number | string, value: string) => {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.missionId === id
                    ? { ...mission, missionName: value }
                    : mission
            )
        );

        setDebouncedUpdate({ id, value });
    }, []);

    // 미션 삭제
    const deleteMission = useCallback(
        (id: number | string) => {
            if (typeof id === 'number') {
                mutateDeleteMission({ tripId, stampId, missionId: id });
            }

            setMissions((prev) =>
                prev.filter((mission) => mission.missionId !== id)
            );
        },
        [tripId, stampId, mutateDeleteMission]
    );

    // 미션 체크 상태 토글
    const toggleCheck = useCallback((id: number | string) => {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.missionId === id
                    ? { ...mission, isChecked: !mission.isChecked }
                    : mission
            )
        );
    }, []);

    // 전체 미션 배열 업데이트
    const updateMissionOrder = useCallback(
        (newMissions: MissionItem[]) => {
            setMissions(newMissions);
        },
        [tripId, stampId]
    );

    // ✅ 미션 추가 API 호출

    return {
        missions,
        allChecked,
        checkedCount,
        checkedMissionIds,
        updateLabel,
        deleteMission,
        toggleCheck,
        updateMissionOrder,
    };
};
