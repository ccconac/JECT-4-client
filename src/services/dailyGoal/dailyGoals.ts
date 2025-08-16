import api from '../../lib/axios';
import { type DailyGoal } from '../../types/dailyGoal';

export const createDailyGoal = async (tripId: number, dailyGoal: DailyGoal) => {
    try {
        const { data } = await api.post(
            `/trips/${tripId}/daily-goals`,
            dailyGoal
        );

        return data.data;
    } catch (error: unknown) {
        if ((error as any)?.response.status === 404) {
            throw new Error('데일리 목표를 생성할 수 없습니다.');
        }

        throw new Error(
            '데일리 목표를 생성에 실패했습니다. 잠시 후에 다시 시도해 주세요.'
        );
    }
};
