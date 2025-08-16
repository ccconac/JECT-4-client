export interface MissionItem {
    missionId: number;
    missionName: string;
    missionOrder: number;
    completed: boolean;
    isEditing: boolean;
    isChecked: boolean;
}

export type ServerMissionItem = Omit<MissionItem, 'isEditing' | 'isChecked'>;
