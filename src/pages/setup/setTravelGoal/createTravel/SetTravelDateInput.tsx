interface SetTravelDateInputProps {
    labelName: string;
}

const SetTravelDateInput = ({ labelName }: SetTravelDateInputProps) => {
    // todo : labelName = "도착일 ", 달력 아이콘 렌더링
    return (
        <div className="flex flex-col gap-[7px]">
            <label className="text-small text-secondary opacity-60">
                {labelName}
                <span className="text-point1"> *</span>
            </label>
            <input
                className="placeholder:text-subtitle placeholder:text-text-min border-input-sub bg-input-focus h-[50px] rounded-md border py-2.5 pl-[15px] placeholder:opacity-40"
                placeholder="2025년 7월 4일"
                disabled
            />
        </div>
    );
};

export default SetTravelDateInput;
