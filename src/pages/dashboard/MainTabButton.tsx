import { useNavigate } from 'react-router';

const MainTabButton = () => {
    const navigate = useNavigate();
    return (
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
    );
};

export default MainTabButton;
