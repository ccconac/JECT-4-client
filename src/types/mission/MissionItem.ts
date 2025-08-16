export interface MissionMutationProps {
    tripId: number;
    stampId: number;
    missionId: number;
    missionContent: MissionContent;
}

export type Ids = Omit<MissionMutationProps, 'missionContent'>;

export interface MissionItem {
    missionId: number;
    missionName: string;
    missionOrder: number;
    completed: boolean;
    isEditing: boolean;
    isChecked: boolean;
}

export type ServerMissionItem = Omit<MissionItem, 'isEditing' | 'isChecked'>;

export interface CreateMission {
    name: string;
    memo: string;
    order: number;
}

export interface MissionContent {
    name: string;
    memo: string;
}

export interface RequestSuccess {
    success: boolean;
    status: number;
    data: null;
}
