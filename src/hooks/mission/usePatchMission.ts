import { useMutation, useQueryClient } from '@tanstack/react-query';

import type {
    RequestSuccess,
    MissionMutationProps,
    ServerMissionItem,
} from '../../types/mission/Mission';
import { patchMission } from '../../services/mission/missions';
import { toast } from 'react-toastify';

const usePatchMission = () => {
    const queryClient = useQueryClient();

    const { mutate, ...rest } = useMutation<
        RequestSuccess,
        Error,
        MissionMutationProps,
        { previousMissions?: ServerMissionItem[] }
    >({
        mutationFn: async ({ tripId, stampId, missionId, missionContent }) => {
            return patchMission(tripId, stampId, missionId, missionContent);
        },
        onMutate: async (newMissionData) => {
            // 1. 현재 쿼리 취소 (낙관적 업데이트와의 충돌 방지를 위함)
            await queryClient.cancelQueries({
                queryKey: [
                    'missions',
                    newMissionData.tripId,
                    newMissionData.stampId,
                ],
            });

            // 2. 이전 데이터 저장
            const previousMissions = queryClient.getQueryData<
                ServerMissionItem[]
            >(['missions', newMissionData.tripId, newMissionData.stampId]);

            // 3. 캐시 낙관적 업데이트
            queryClient.setQueryData<ServerMissionItem[]>(
                ['missions', newMissionData.tripId, newMissionData.stampId],
                (oldMissions) => {
                    if (!oldMissions) return previousMissions;

                    return oldMissions.map((mission) =>
                        mission.missionId === newMissionData.missionId
                            ? {
                                  ...mission,
                                  ...newMissionData.missionContent,
                              }
                            : mission
                    );
                }
            );

            return { previousMissions };
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['missions', variables.tripId, variables.stampId],
            });
        },
        onError: (_, variables, context) => {
            toast.error(`미션 이름 수정에 실패했습니다.`);

            if (context?.previousMissions) {
                queryClient.setQueryData<ServerMissionItem[]>(
                    ['missions', variables.tripId, variables.stampId],
                    context.previousMissions
                );
            }
        },
    });

    return { mutatePatchMission: mutate, ...rest };
};

export default usePatchMission;
