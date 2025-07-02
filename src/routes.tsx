import { Routes, Route, Navigate } from 'react-router-dom';
import StyleGuide from './pages/StyleGuide';
import LoginPage from './pages/auth/LoginPage/KakaoLoginPage';
import LoginAccessPage from './pages/auth/LoginPage/KakaoLoginAccessPage';
import SetNamePage from './pages/auth/LoginPage/SetNamePage';
import SetJobPage from './pages/auth/LoginPage/SetJobPage';
import OnBoarding from './pages/onboarding';
import MainLayout from './components/MainLayout';

const Router = () => {
    return (
        <Routes>
            {/* 인증/온보딩 : 푸터 없는 페이지들 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/callback/kakao" element={<LoginAccessPage />} />
            <Route path="/setName" element={<SetNamePage />} />
            <Route path="/setJob" element={<SetJobPage />} />
            <Route path="/onboarding" element={<OnBoarding />} />

            {/* 스타일 가이드 페이지 */}
            <Route path="/style-guide" element={<StyleGuide />} />

            {/* 메인 서비스 : 푸터 있는 페이지들 */}
            <Route path="/" element={<MainLayout />} />

            {/* 404 처리 : 메인 페이지 리다이렉트 (임시) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Router;
