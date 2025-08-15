import api from '../../lib/axios';
import type { Mission } from '../../store/mission/missionsAtom';

export const fetchMissions = async (
    tripId: number,
    stampId: number
): Promise<Mission[]> => {
    const { data } = await api.get(
        `/trips/${tripId}/stamps/${stampId}/missions`
    );

    return data.data;
};

export interface CreateMissionDto {
    name: string;
    memo: string;
    order: number;
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
