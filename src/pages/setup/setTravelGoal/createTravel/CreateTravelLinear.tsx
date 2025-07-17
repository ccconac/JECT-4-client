import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface TravelFormData {
    startDate: string;
    endDate: string;
    tripName: string;
    memo: string;
}

const CreateTravelLinear = () => {
    const [showStartDateModal, setShowStartDateModal] = useState(false);
    const [showEndDateModal, setShowEndDateModal] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<TravelFormData>({
        defaultValues: {
            startDate: '2025년 7월 4일',
            endDate: '2025년 7월 15일',
            tripName: '토익뿌시기',
            memo: '',
        },
    });

    const startDate = watch('startDate');
    const endDate = watch('endDate');

    const onSubmit = (data: TravelFormData) => {
        console.log('폼 데이터:', data);
        // API 호출 등 처리
    };

    const handleStartDateClick = () => {
        setShowStartDateModal(true);
    };

    const handleEndDateClick = () => {
        setShowEndDateModal(true);
    };

    const handleDateSelect = (date: string, type: 'start' | 'end') => {
        if (type === 'start') {
            setValue('startDate', date);
            setShowStartDateModal(false);
        } else {
            setValue('endDate', date);
            setShowEndDateModal(false);
        }
    };

    return (
        // <div className="mx-auto min-h-screen max-w-md bg-[#FFFAEF] p-6">
        <main className="mt-[46px] flex cursor-pointer flex-col gap-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* 출발일 */}
                <div>
                    <label className="mb-2 block text-sm text-[#757575]">
                        출발일 <span className="text-red-500">*</span>
                    </label>
                    <div
                        className="w-full cursor-pointer rounded-lg border border-[#6FC8BE] bg-white p-4"
                        onClick={handleStartDateClick}
                    >
                        <span className="text-lg text-[#364B59]">{startDate}</span>
                    </div>
                    {errors.startDate && (
                        <p className="mt-1 text-sm text-red-500">{errors.startDate.message}</p>
                    )}
                </div>

                {/* 도착일 */}
                <div>
                    <label className="mb-2 block text-sm text-[#757575]">
                        도착일 <span className="text-red-500">*</span>
                    </label>
                    <div
                        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-[#895A3F] bg-white p-4"
                        onClick={handleEndDateClick}
                    >
                        <span className="text-lg text-[#364B59]">{endDate}</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-[#895A3F]"
                        >
                            <path
                                d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    {errors.endDate && (
                        <p className="mt-1 text-sm text-red-500">{errors.endDate.message}</p>
                    )}
                    <p className="mt-1 text-sm text-red-500">* 필수로 입력해주세요.</p>
                </div>

                {/* 여행 이름 */}
                <div>
                    <label className="mb-2 block text-sm text-[#757575]">여행 이름</label>
                    <input
                        {...register('tripName', {
                            required: '여행 이름은 필수입니다',
                            maxLength: {
                                value: 20,
                                message: '20자 이하로 입력해주세요',
                            },
                        })}
                        className="w-full rounded-lg border border-gray-300 p-4 text-lg text-[#364B59] placeholder-gray-400"
                        placeholder="여행 이름을 입력하세요"
                    />
                    {errors.tripName && (
                        <p className="mt-1 text-sm text-red-500">{errors.tripName.message}</p>
                    )}
                </div>

                {/* 메모 추가 */}
                <div>
                    <label className="mb-2 block text-sm text-[#757575]">메모 추가</label>
                    <textarea
                        {...register('memo')}
                        className="w-full resize-none rounded-lg border border-gray-300 p-4 text-[#364B59] placeholder-gray-400"
                        placeholder="꼭 지켜야 할 내용을 작성해 주세요"
                        rows={4}
                    />
                </div>

                {/* 제출 버튼 */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-[#6FC8BE] py-4 text-lg font-bold text-white transition-colors hover:bg-[#5fb3a9]"
                >
                    다음
                </button>
            </form>

            {/* 출발일 모달 (간단한 예시) */}
            {showStartDateModal && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
                    <div className="w-80 rounded-lg bg-white p-6">
                        <h3 className="mb-4 text-lg font-bold">출발일 선택</h3>
                        <div className="space-y-2">
                            <button
                                className="w-full rounded p-2 text-left hover:bg-gray-100"
                                onClick={() => handleDateSelect('2025년 7월 1일', 'start')}
                            >
                                2025년 7월 1일
                            </button>
                            <button
                                className="w-full rounded p-2 text-left hover:bg-gray-100"
                                onClick={() => handleDateSelect('2025년 7월 4일', 'start')}
                            >
                                2025년 7월 4일
                            </button>
                        </div>
                        <button
                            className="mt-4 w-full rounded bg-gray-200 py-2"
                            onClick={() => setShowStartDateModal(false)}
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}

            {/* 도착일 모달 (간단한 예시) */}
            {showEndDateModal && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
                    <div className="w-80 rounded-lg bg-white p-6">
                        <h3 className="mb-4 text-lg font-bold">도착일 선택</h3>
                        <div className="space-y-2">
                            <button
                                className="w-full rounded p-2 text-left hover:bg-gray-100"
                                onClick={() => handleDateSelect('2025년 7월 10일', 'end')}
                            >
                                2025년 7월 10일
                            </button>
                            <button
                                className="w-full rounded p-2 text-left hover:bg-gray-100"
                                onClick={() => handleDateSelect('2025년 7월 15일', 'end')}
                            >
                                2025년 7월 15일
                            </button>
                        </div>
                        <button
                            className="mt-4 w-full rounded bg-gray-200 py-2"
                            onClick={() => setShowEndDateModal(false)}
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default CreateTravelLinear;
