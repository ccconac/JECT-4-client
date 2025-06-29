import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function KakaoLoginAccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  useEffect(() => {
    if (code) {
      navigate('/setName', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, []);
  return (
    <>
      <div>로그인 중입니다..</div>
    </>
  );
}

export default KakaoLoginAccessPage;
