import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    createMission,
    type CreateMissionDto,
} from '../../services/mission/missions';

const useCreateMission = (tripId: number, stampId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dto: CreateMissionDto) =>
            createMission(tripId, stampId, dto),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['missions', tripId, stampId],
            });
        },
    });
};

export default useCreateMission;
