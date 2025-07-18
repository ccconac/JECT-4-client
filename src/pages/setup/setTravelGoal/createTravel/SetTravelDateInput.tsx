interface SetTravelDateInputProps {
    labelName: string;
}

const SetTravelDateInput = ({ labelName }: SetTravelDateInputProps) => {
    return (
        <div className="flex flex-col gap-[7px]">
            <label className="text-small text-secondary text-text-min">
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
