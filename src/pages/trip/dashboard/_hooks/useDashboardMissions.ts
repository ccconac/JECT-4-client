import { useState, useMemo, useCallback } from 'react';
import { type MissionItem } from '../_components/MissionCard';

export const useDashboardMissions = (initialMissions: MissionItem[] = []) => {
    const [missions, setMissions] = useState<MissionItem[]>(initialMissions);

    // 모든 미션이 완료되었는지 확인
    const allChecked = useMemo(
        () => missions.every((mission) => mission.isChecked),
        [missions]
    );

    // 완료된 미션 개수 계산
    const checkedCount = useMemo(
        () => missions.filter((mission) => mission.isChecked).length,
        [missions]
    );

    // 미션 라벨 업데이트
    const updateLabel = useCallback((id: string, value: string) => {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id ? { ...mission, text: value } : mission
            )
        );
    }, []);

    // 미션 삭제
    const deleteMission = useCallback((id: string) => {
        setMissions((prev) => prev.filter((mission) => mission.id !== id));
    }, []);

    // 미션 체크 상태 토글
    const toggleCheck = useCallback((id: string) => {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id
                    ? { ...mission, isChecked: !mission.isChecked }
                    : mission
            )
        );
    }, []);

    // 미션 배열 변경 사항 존재 시 미션 배열 업데이트
    const updateMissionOrder = useCallback((newMissions: MissionItem[]) => {
        setMissions(newMissions);
    }, []);

    return {
        missions,
        allChecked,
        checkedCount,
        updateLabel,
        deleteMission,
        toggleCheck,
        setMissions,
        updateMissionOrder,
    };
};
