// 셋업 이후 메인 화면
import MainTabButton from './MainTabButton';
import MainCardButton from './MainCardButton';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmModal from '../../components/common/ConfirmModal';

const travelList = [
    {
        id: '1',
        title: '토익 900점 달성',
        memo: 'RC PART III 까지',
        progress: 72,
        leftDays: 5,
    },
    {
        id: '2',
        title: '전공수업 과제제출',
        memo: '프로그래밍 과제 제출',
        progress: 52,
        leftDays: 3,
    },
];

const MainPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); // 편집 모드 상태

    const handleDelete = (id: string) => {
        console.log(`여행 ${id} 삭제`);
    };

    return (
        <div>
            <div className="pt-7">
                <MainTabButton />
            </div>
            <div className="mt-5">
                <div className="mb-1 flex cursor-pointer justify-end">
                    <button
                        className="text-caption text-[#585858]"
                        onClick={() => setIsEditMode((prev) => !prev)}
                    >
                        {isEditMode ? '완료' : '편집'}
                    </button>
                </div>
                <div className="flex cursor-pointer flex-col gap-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-plus-background text-text-sub flex w-full justify-center rounded-xl border py-6"
                    >
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
                    <div className="flex flex-col gap-3">
                        {travelList.map((travel) => (
                            <MainCardButton
                                key={travel.id}
                                travel={travel}
                                isEditMode={isEditMode}
                                onDelete={() => handleDelete(travel.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => {
                    setIsModalOpen(false);
                    navigate('/set-travel-type');
                }}
                title={
                    <div className="text-subtitle text-secondary flex flex-col items-center px-8 text-center font-semibold">
                        새로운 여행을 시작하시겠습니까?
                    </div>
                }
                children={
                    <div>스터디트립과 함께 새로운 여행을 시작해보아요!</div>
                }
            />
        </div>
    );
};

export default MainPage;
