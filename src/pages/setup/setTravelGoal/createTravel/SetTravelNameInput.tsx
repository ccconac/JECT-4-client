const SetTravelNameInput = () => {
    return (
        <div className="flex flex-col gap-[7px]">
            <label className="text-small text-secondary opacity-60">
                여행 이름
            </label>
            <input className="text-subtitle text-text-sub text-placeholder:text-subtitle placeholder:text-text-min border-input-sub bg-input-focus h-[50px] rounded-md border py-2.5 pl-[15px] placeholder:opacity-40" />
        </div>
    );
};

export default SetTravelNameInput;
