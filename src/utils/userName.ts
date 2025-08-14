import api from '../lib/axios';

export async function getUserName(): Promise<string> {
    const response = await api.get('/members/me');
    return response.data.name; // API 응답에 맞게 key 조정
}
