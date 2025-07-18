const SetTravelMemoInput = () => {
    return (
        <div className="flex flex-col gap-[7px]">
            <label className="text-small">메모 추가</label>
            <input
                placeholder="꼭 지켜야 할 내용을 작성해 주세요. "
                className="border border-amber-700"
            />
        </div>
    );
};

export default SetTravelMemoInput;
