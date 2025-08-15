import { useState } from 'react';
import { type Mission } from '../../../../store/mission/missionsAtom';

export function useDashboardMissions(initialMissions: Mission[]) {
    const [missions, setMissions] = useState<Mission[]>(initialMissions);

    const allChecked =
        missions.length > 0 && missions.every((m) => m.completed);
    const checkedCount = missions.filter((m) => m.completed).length;

    const toggleCheck = (id: number) => {
        setMissions((prev) =>
            prev.map((m) =>
                m.missionId === id ? { ...m, completed: !m.completed } : m
            )
        );
    };

    const updateLabel = (id: number, newLabel: string) => {
        setMissions((prev) =>
            prev.map((m) =>
                m.missionId === id ? { ...m, label: newLabel } : m
            )
        );
    };

    const deleteMission = (id: number) => {
        setMissions((prev) => prev.filter((m) => m.missionId !== id));
    };

    const calcNextOrder = () =>
        (missions.reduce((max, m) => Math.max(max, m.missionOrder ?? 0), 0) ||
            0) + 1;

    const addMission = () => {
        const tempId = -Date.now();
        const missionOrder = calcNextOrder();

        setMissions((prev) => [
            ...prev,
            {
                missionId: tempId,
                missionName: '',
                missionOrder,
                completed: false,
            },
        ]);
    };

    return {
        missions,
        allChecked,
        checkedCount,
        toggleCheck,
        updateLabel,
        deleteMission,
        addMission,
        setMissions,
    };
}
