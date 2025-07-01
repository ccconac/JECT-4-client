import { Routes, Route } from 'react-router-dom';
import StyleGuide from './pages/StyleGuide';
import LoginPage from './pages/login';
import OnBoarding from './pages/onboarding';
import MainLayout from './components/MainLayout';

const Router = () => {
    return (
        <Routes>
            {/* 인증/온보딩 : 푸터 없는 페이지들 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route path="/style-guide" element={<StyleGuide />} />

            {/* 메인 서비스 : 푸터 있는 페이지들 */}
            <Route path="/" element={<MainLayout />} />
        </Routes>
    );
};

export default Router;
