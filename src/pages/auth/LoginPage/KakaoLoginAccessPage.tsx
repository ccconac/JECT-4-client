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

    // code가 있을 경우 userInfoAtom에 저장하고 이름 설정 페이지로 이동
    useEffect(() => {
        if (code) {
            setUserInfo({
                ...userInfo,
                code: code,
            });
            navigate('/set-name', { replace: true });
        } else {
            alert('로그인 실패: 인증 코드가 없습니다.');
            navigate('/', { replace: true });
        }
    }, [code]);

    return (
        <>
            <div>로그인 중입니다..</div>
        </>
    );
}

export default KakaoLoginAccessPage;
