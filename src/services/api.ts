import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

// 요청 인터셉터 – accessToken 자동 추가
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 – accessToken 만료 시 자동 갱신
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // accessToken 만료 (401) + 한 번만 재시도
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');

                const res = await axios.post('/api/auth/refresh', {
                    refreshToken,
                });

                const newAccessToken = res.data.accessToken;
                localStorage.setItem('accessToken', newAccessToken);

                // 새 accessToken으로 원래 요청 다시 시도
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error('토큰 갱신 실패', refreshError);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/'; // 또는 navigate('/') 등 로그아웃 처리
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
