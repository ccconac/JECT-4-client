import { useNavigate, useSearchParams } from 'react-router';
import { useEffect } from 'react';

function KakaoLoginAccessPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    useEffect(() => {
        if (code) {
            navigate('/set-name', { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    }, [code, navigate]);
    return (
        <>
            <div>로그인 중입니다..</div>
        </>
    );
}

export default KakaoLoginAccessPage;
