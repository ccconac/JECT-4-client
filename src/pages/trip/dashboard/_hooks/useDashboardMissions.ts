import { useState } from 'react';

export interface Mission {
    id: number;
    label: string;
    isEditing: boolean;
    isChecked: boolean;
    isNew?: boolean;
    order?: number;
    memo?: string;
}

export function useDashboardMissions(initialMissions: Mission[]) {
    const [missions, setMissions] = useState<Mission[]>(initialMissions);

    const allChecked =
        missions.length > 0 && missions.every((m) => m.isChecked);
    const checkedCount = missions.filter((m) => m.isChecked).length;

    const toggleCheck = (id: number) => {
        setMissions((prev) =>
            prev.map((m) =>
                m.id === id ? { ...m, isChecked: !m.isChecked } : m
            )
        );
    };

    const updateLabel = (id: number, newLabel: string) => {
        setMissions((prev) =>
            prev.map((m) => (m.id === id ? { ...m, label: newLabel } : m))
        );
    };

    const deleteMission = (id: number) => {
        setMissions((prev) => prev.filter((m) => m.id !== id));
    };

    const calcNextOrder = () =>
        (missions.reduce((max, m) => Math.max(max, m.order ?? 0), 0) || 0) + 1;

    const addMission = () => {
        const tempId = -Date.now();
        const order = calcNextOrder();

        setMissions((prev) => [
            ...prev,
            {
                id: tempId,
                label: '',
                memo: '',
                order,
                isEditing: true,
                isChecked: false,
                isNew: true,
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
