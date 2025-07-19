const SetTravelMemoInput = () => {
    return (
        <div className="flex flex-col gap-[7px]">
            <label htmlFor="memo" className="text-small text-secondary opacity-60">
                메모 추가
            </label>
            <textarea
                id="memo"
                placeholder="꼭 지켜야 할 내용을 작성해 주세요. "
                className="text-text-sub text-body placeholder:text-body placeholder:text-text-min border-input-sub bg-input-focus h-25 rounded-md border pt-[11px] pl-[15px] placeholder:opacity-40"
            />
        </div>
    );
};

export default SetTravelMemoInput;
