import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { type MutationDailyGoalProps } from '../../types/dailyGoal';
import { createDailyGoal } from '../../services/dailyGoal/dailyGoals';

export interface CreateDailyGoalSuccessResponse {
    success: boolean;
    status: number;
    dailyGoalId: number;
}

const useCreateDailyGoal = (
    options?: UseMutationOptions<
        CreateDailyGoalSuccessResponse,
        Error,
        MutationDailyGoalProps,
        unknown
    >
) => {
    const { mutate, ...rest } = useMutation<
        CreateDailyGoalSuccessResponse,
        Error,
        MutationDailyGoalProps
    >({
        mutationFn: async ({ tripId, dailyGoal }) => {
            return createDailyGoal(tripId, dailyGoal);
        },
        ...options,
    });

    return { mutateCreateDailyGoal: mutate, ...rest };
};

export default useCreateDailyGoal;
