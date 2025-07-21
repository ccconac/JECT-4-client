import dayjs from 'dayjs';

interface SetTravelDateInputProps {
    labelName: string;
}

const SetTravelDateInput = ({ labelName }: SetTravelDateInputProps) => {
    // todo : labelName = "도착일 ", 달력 아이콘 렌더링

    const labelMap = {
        startDate: '출발일',
        finishDate: '도착일',
    };

    const currentDate = dayjs();
    console.log(currentDate.format('YYYY년 M월 D일'));

    return (
        <div className="flex flex-col gap-[7px]">
            <label
                className="text-small text-secondary opacity-60"
                htmlFor="date"
            >
                {labelName === 'startDate'
                    ? labelMap.startDate
                    : labelMap.finishDate}
                <span className="text-point1"> *</span>
            </label>
            <input
                className="placeholder:text-subtitle placeholder:text-text-min border-input-sub bg-input-focus h-[50px] rounded-md border py-2.5 pl-[15px] placeholder:opacity-40"
                placeholder={currentDate.format('YYYY년 M월 D일')}
                id="date"
                disabled={labelName === 'startDate'}
            />
        </div>
    );
};

export default SetTravelDateInput;
// labelName === startDate -> 현재 날짜 가져와서, 포맷팅, input 의 placeholder 에 넣기
