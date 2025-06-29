import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from '../../../features/auth/kakao-login/ui/KakaoLoginButton';

function KakaoLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (code) {
      console.log('Kakao OAuth Code:', code);
    }
  }, [location.search, navigate]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      <div className="flex h-screen w-[90vw] flex-col justify-around">
        <div>
          <div>목표를 향한 하나의 여행</div>
          <div>스터디 트립</div>
          <div>결과보다 과정을, 성취보다 성장의 가치를 발견해봐요</div>
        </div>
        <div>
          <KakaoLoginButton />
        </div>
      </div>
    </div>
  );
}

export default KakaoLoginPage;
