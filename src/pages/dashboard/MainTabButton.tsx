//import { useNavigate } from 'react-router';

const MainTabButton = () => {
    //const navigate = useNavigate();
    return (
        <section className="mb-5 rounded-lg bg-gradient-to-r py-5">
            <h1 className="text-title text-secondary">나의 여행 리스트</h1>
            <p className="text-small text-text-min">
                지금 도전 중인 목표들을 확인해보세요.
            </p>
        </section>
        /*
        <div
            className="bg-text-sub/40 border-text-sub inline-flex justify-center gap-1 rounded-full border p-1 shadow-inner"
            role="tablist"
            aria-orientation="horizontal"
        >
            <button
                className="group bg-text-sub flex items-center rounded-full px-6 py-0.5 text-sm/7 font-medium text-white ring ring-gray-950/5"
                role="tab"
                type="button"
            >
                여행 리스트
            </button>
            <button
                className="group text-text-sub flex cursor-pointer items-center rounded-full px-6 py-0.5 text-sm/7 font-medium"
                role="tab"
                type="button"
                onClick={() => navigate('/calendar')}
            >
                캘린더
            </button>
        </div>
    */
    );
};

export default MainTabButton;
