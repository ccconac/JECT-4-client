// 셋업 이후 메인 화면
import BottomNavBar from '../../components/BottomNavBar';
import MainTabButton from './MainTabButton';
import MainCardButton from './MainCardButton';

const MainPage = () => {
    return (
        <div>
            <div className="flex justify-center pt-5">
                <MainTabButton />
            </div>
            <div className="mt-11">
                <div className="mb-1 flex justify-end">
                    <button className="text-caption text-secondary">
                        편집
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <button className="bg-plus-background text-text-sub flex w-full justify-center rounded-xl border py-6">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 5V19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M5 12H19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <div>
                        <MainCardButton />
                    </div>
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
};

export default MainPage;
