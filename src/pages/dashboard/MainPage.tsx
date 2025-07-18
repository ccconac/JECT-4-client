// 셋업 이후 메인 화면
import { useNavigate, useSearchParams } from 'react-router';
import { useEffect } from 'react';
import MainTabButton from './MainTabButton';

const MainPage = () => {
    return (
        <div className="flex justify-center pt-5">
            <MainTabButton />
        </div>
    );
};

export default MainPage;
