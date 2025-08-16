import { useQuery } from '@tanstack/react-query';

import { fetchMissions } from '../../services/mission/missions';
import { type MissionItem } from '../../types/mission/MissionItem';

const useMissionQuery = (tripId: number, stampId: number) => {
    return useQuery<Omit<MissionItem, 'isEditing' | 'isChecked'>[], Error>({
        queryKey: ['missions', tripId, stampId],
        queryFn: () => {
            if (!tripId && !stampId) {
                throw new Error('미션 목록 id를 조회할 수 없습니다.');
            }

            return fetchMissions(tripId, stampId);
        },
        enabled: !!tripId && !!stampId,
        staleTime: 60_000,
    });
};

export default useMissionQuery;
