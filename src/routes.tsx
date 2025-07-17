import { Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/auth/LoginPage/KakaoLoginPage';
import LoginAccessPage from './pages/auth/LoginPage/KakaoLoginAccessPage';
import SetNamePage from './pages/setup/setProfile/SetNamePage';
import SetJobPage from './pages/setup/setProfile/SetJobPage';
import SetTravelTypePage from './pages/setup/setTravelGoal/setTravelType/index';
import SetTravelNamePage from './pages/setup/setTravelGoal/setTravelName';
import CreateStampPage from './pages/setup/setTravelGoal/createStamp';

import MainLayout from './components/MainLayout';
import StyleGuide from './pages/style-guide/StyleGuide';

const Router = () => {
    return (
        <Routes>
            {/* 온보딩, 로그인, 셋업 페이지 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/callback/kakao" element={<LoginAccessPage />} />
            <Route path="/set-name" element={<SetNamePage />} />
            <Route path="/set-job" element={<SetJobPage />} />
            <Route path="/set-travel-name" element={<SetTravelNamePage />} />
            <Route path="/set-travel-type" element={<SetTravelTypePage />} />
            <Route path="/create-stamp" element={<CreateStampPage />} />

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
