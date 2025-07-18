interface SetTravelDateInputProps {
    labelName: string;
}

const SetTravelDateInput = ({ labelName }: SetTravelDateInputProps) => {
    return (
        <div className="flex flex-col gap-[7px]">
            <label className="text-small text-secondary">
                {labelName}
                <span className="text-point1"> *</span>
            </label>
            <input
                className="border border-amber-700"
                placeholder="2025년 7월 4일"
            />
        </div>
    );
};

export default SetTravelDateInput;
