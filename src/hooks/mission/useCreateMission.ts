import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    createMission,
    type CreateMissionDto,
    type Mission,
} from '../../services/mission/createMission';

const useCreateMission = (tripId: number, stampId: number) => {
    const queryClient = useQueryClient();

    return useMutation<Mission, Error, CreateMissionDto>({
        mutationFn: (dto) => createMission(tripId, stampId, dto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tripDetail', tripId] });
            queryClient.invalidateQueries({
                queryKey: ['stampMissions', tripId, stampId],
            });
            queryClient.invalidateQueries({
                queryKey: ['dashboardMissions', tripId],
            });
        },
    });
};

export default useCreateMission;
