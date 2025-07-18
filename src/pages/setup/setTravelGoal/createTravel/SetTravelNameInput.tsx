const SetTravelNameInput = () => {
    return (
        <div className="flex flex-col gap-[7px]">
            <label className="text-small">여행 이름</label>
            <input
                placeholder="여행 이름을 설정해주세요"
                className="border border-amber-700"
            />
        </div>
    );
};

export default SetTravelNameInput;
