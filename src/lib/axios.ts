import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

const authExcludedPaths = [
    '/auth/login/kakao',
    '/auth/signup/kakao',
    '/auth/logout',
    '/auth/token/reissue',
];

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');

        if (!authExcludedPaths.includes(config.url || '')) {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
