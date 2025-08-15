import { useQuery } from '@tanstack/react-query';
import { fetchMissions } from '../../services/mission/missions';
import type { Mission } from '../../store/mission/missionsAtom';

const useMissionsQuery = (tripId?: number | null, stampId?: number | null) => {
    return useQuery<Mission[]>({
        queryKey: ['missions', tripId, stampId],
        queryFn: () => {
            if (!tripId || !stampId) {
                throw new Error('미션에 해당하는 id를 찾을 수 없습니다.');
            }

            return fetchMissions(tripId, stampId);
        },
        enabled: !!tripId && !!stampId,
        staleTime: 60_000,
    });
};

export default useMissionsQuery;
