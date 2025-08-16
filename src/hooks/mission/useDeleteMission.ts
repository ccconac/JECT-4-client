import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteMission } from '../../services/mission/missions';
import type {
    RequestSuccess,
    Ids,
    ServerMissionItem,
} from '../../types/mission/Mission';

const useDeleteMission = () => {
    const queryClient = useQueryClient();

    const { mutate, ...rest } = useMutation<
        RequestSuccess,
        Error,
        Ids,
        { previousMissions?: ServerMissionItem[] }
    >({
        mutationFn: async ({ tripId, stampId, missionId }) => {
            return deleteMission(tripId, stampId, missionId);
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['missions', variables.tripId, variables.stampId],
            });
        },
        onError: (_, variables, context) => {
            toast.error('미션 삭제에 실패했습니다.');

            // 낙관적 업데이트 실패했을 경우 데이터 이전 값으로 복구
            if (context?.previousMissions) {
                queryClient.setQueryData(
                    ['missions', variables.tripId, variables.stampId],
                    context.previousMissions
                );
            }
        },
        onMutate: async (variables) => {
            // 1. 이전 데이터 저장
            const previousMissions = queryClient.getQueryData<
                ServerMissionItem[]
            >(['missions', variables.tripId, variables.stampId]);

            // 2. 낙관적 업데이트
            queryClient.setQueryData<ServerMissionItem[]>(
                ['missions', variables.tripId, variables.stampId],
                (oldMissions) => {
                    return (oldMissions || []).filter(
                        (mission) => mission.missionId !== variables.missionId
                    );
                }
            );

            // 3. onError 또는 onSettled에서 사용할 context 반환
            return { previousMissions };
        },
    });
    return { mutateDeleteMission: mutate, ...rest };
};

export default useDeleteMission;
