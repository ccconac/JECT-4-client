import { useNavigate, useSearchParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { userInfoAtom } from '../../../store/userInfoAtom';

function KakaoLoginAccessPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [userInfo, setUserInfo] = useAtom(userInfoAtom);

    // code가 있을 경우 1. 로그인 시도 2. 로그인 실패할 시 userInfoAtom에 저장하고 이름 설정 페이지로 이동
    useEffect(() => {
        if (!code) {
            alert('로그인 실패: 인증 코드가 없습니다.');
            navigate('/', { replace: true });
            return;
        }

        const login = async () => {
            try {
                const response = await axios.post('/api/auth/login/kakao', {
                    code,
                });

                console.log('서버 응답:', response.data);

                // 로그인 성공 시 바로 main으로 이동
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem(
                    'refreshToken',
                    response.data.refreshToken
                );
                navigate('/main', { replace: true });
            } catch (error) {
                console.error('로그인 실패, 회원가입으로 이동', error);

                // 로그인 실패 시 userInfo에 code 저장하고 set-name으로 이동
                setUserInfo((prev) => ({
                    ...prev,
                    code,
                }));

                navigate('/set-name', { replace: true });
            }
        };

        login();
    }, [code, navigate, setUserInfo]);

    return null;
}

export default KakaoLoginAccessPage;
