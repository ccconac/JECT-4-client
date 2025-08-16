import api from '../../lib/axios';
import { type MissionItem } from '../../types/mission/MissionItem';

export const fetchMissions = async (
    tripId: number,
    stampId: number
): Promise<Omit<MissionItem, 'isEditing' | 'isChecked'>[]> => {
    try {
        const { data } = await api.get<{
            data: Omit<MissionItem, 'isEditing' | 'isChecked'>[];
        }>(`/trips/${tripId}/stamps/${stampId}/missions`);

        return data.data;
    } catch (error: unknown) {
        if ((error as any)?.response?.status === 404) {
            throw new Error('미션 목록을 불러올 수 없습니다.');
        }

        throw new Error(
            '미션 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.'
        );
    }
};
