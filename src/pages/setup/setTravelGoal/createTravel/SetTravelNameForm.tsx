import { clsx } from 'clsx';
import { useState } from 'react';

const SetTravelNameForm = () => {
    const [travelName, setTravelName] = useState('');

    const isDisabled = travelName.trim() === '';

    const handleFormSubmit = () => {
        // 도착일 필드, 여행 이름 설정 필드 값 받아서 api 호출
    };

    return (
        <form className="mt-10 flex flex-col gap-3">
            {/* 여행 출발일 필드 (자동) */}
            <div className="flex flex-col gap-2">
                <label className="text-small text-secondary opacity-60">
                    출발일
                    <span className="text-point1"> *</span>
                </label>
                <span className="text-text-min/40 text-subtitle border-input-sub bg-input-focus h-[50px] rounded-md border py-2.5 pl-[15px]">
                    2025년 7월 4일
                </span>
            </div>

            {/* 여행 도착일 필드 */}
            <div className="flex flex-col gap-2">
                <label
                    className="text-small text-secondary opacity-60"
                    htmlFor="date"
                >
                    도착일
                    <span className="text-point1"> *</span>
                </label>
                <span
                    className="placeholder:text-subtitle placeholder:text-text-min border-input-sub bg-input-focus h-[50px] rounded-md border py-2.5 pl-[15px] placeholder:opacity-40"
                    id="date"
                >
                    <span className="text-text-min/40 text-subtitle">
                        2025년 8월 1일
                    </span>
                </span>
                <span className="text-point1 text-small">
                    * 필수로 입력해주세요.{' '}
                </span>
            </div>

            {/* 여행 이름 설정 */}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="travel-name"
                    className="text-small text-secondary opacity-60"
                >
                    여행 이름
                </label>
                <input
                    id="travel-name"
                    onChange={(e) => setTravelName(e.target.value)}
                    className="text-subtitle text-text-sub text-placeholder:text-subtitle placeholder:text-text-min border-input-sub bg-input-focus h-[50px] rounded-md border py-2.5 pl-[15px] placeholder:opacity-40"
                />
            </div>

            {/* 여행 메모 설정 */}
            <div className="mb-20 flex flex-col gap-2">
                <label
                    htmlFor="memo"
                    className="text-small text-secondary opacity-60"
                >
                    메모 추가
                </label>
                <textarea
                    id="memo"
                    placeholder="꼭 지켜야 할 내용을 작성해 주세요. "
                    className="text-text-sub text-body placeholder:text-body placeholder:text-text-min border-input-sub bg-input-focus h-25 rounded-md border pt-[11px] pl-[15px] placeholder:opacity-40"
                />
            </div>

            <button
                disabled={isDisabled}
                onClick={handleFormSubmit}
                className={clsx(
                    'flex h-12 w-full cursor-pointer items-center justify-center rounded-lg text-white',
                    isDisabled ? 'bg-primary/70' : 'bg-primary'
                )}
            >
                다음
            </button>
        </form>
    );
};

export default SetTravelNameForm;

// 출발일 날짜 가져오기
// 달력 아이콘
// 다음 버튼 터치 > api 호출, 라우팅
