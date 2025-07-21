import dayjs from 'dayjs';
import CalendarIcon from '../../../../assets/icons/calendar_icon.svg';

interface SetTravelDateInputProps {
    labelName: 'startDate' | 'finishDate';
    onModalToggle?: () => void;
}

const SetTravelDateInput = ({
    labelName,
    onModalToggle,
}: SetTravelDateInputProps) => {
    const labelMap = {
        startDate: '출발일',
        finishDate: '도착일',
    };

    const currentDate = dayjs();

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
            <div className="relative w-full">
                <input
                    className="placeholder:text-subtitle placeholder:text-text-min border-input-sub bg-input-focus h-[50px] w-full cursor-pointer rounded-md border px-10 py-2.5 pl-[15px] placeholder:opacity-40"
                    placeholder={currentDate.format('YYYY년 M월 D일')}
                    id="date"
                    readOnly
                />
                {labelName === 'finishDate' && (
                    <button
                        className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer"
                        onClick={onModalToggle}
                        type="button"
                    >
                        <img src={CalendarIcon} alt="calendar" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SetTravelDateInput;
