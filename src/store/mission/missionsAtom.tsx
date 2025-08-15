import { atom } from 'jotai';

export type MissionServer = {
    name: string;
    memo: boolean;
    order: number;
    completed: boolean;
};

export type Mission = {
    missionId: number;
    missionName: string;
    missionOrder: number;
    completed: boolean;
};

export type TempMission = {
    id: number;
    label: string;
    memo: string;
    order: number;
};

export const tempMissionsAtom = atom<TempMission[]>([]);

export const editingMapAtom = atom<Record<number, boolean>>({});

export const inputMapAtom = atom<
    Record<number, { label: string; memo: string }>
>({});
