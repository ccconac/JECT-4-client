import api from '../../lib/axios';

export interface CreateMissionDto {
    name: string;
    memo: string;
    order: number;
}

export interface Mission {
    missionId: number;
    name: string;
    memo: string;
    order: number;
    completed: boolean;
}

export const createMission = async (
    tripId: number,
    stampId: number,
    dto: CreateMissionDto
): Promise<Mission> => {
    const { data } = await api.post(
        `/trips/${tripId}/stamps/${stampId}/missions`,
        dto
    );

    return data.data;
};
