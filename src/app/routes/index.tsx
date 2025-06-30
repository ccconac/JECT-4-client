import { Routes, Route } from 'react-router-dom';
import KakaoLoginPage from '../../pages/auth/LoginPage/KakaoLoginPage';
import KakaoLoginAccessPage from '../../pages/auth/LoginPage/KakaoLoginAccessPage';
import SetNamePage from '../../pages/auth/LoginPage/SetNamePage';
import SelectUserTypePage from '../../pages/auth/LoginPage/SelectUserTypePage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<KakaoLoginPage />} />
            <Route path="/oauth/callback/kakao" element={<KakaoLoginAccessPage />} />
            <Route path="/setName" element={<SetNamePage />} />
            <Route path="/selectUserType" element={<SelectUserTypePage />} />
        </Routes>
    );
};

export default Router;
