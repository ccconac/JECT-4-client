const SetTravelTypeHeader = ({ userName }: { userName: string }) => {
    return (
        <div>
            <img
                src="/public/assets/icons/arrow_back.svg"
                alt="뒤로 가기"
                className="mb-[17px] cursor-pointer"
                // 클릭 시 뒤로 가기 추가 필요
            />
            <header className="flex flex-col gap-1">
                <h1 className="text-secondary text-title">
                    {userName}님, <br />
                    당신의 여행 스타일을 알려주세요.
                </h1>
                <p className="text-text-min text-small">
                    마음 가는 대로, 혹은 계획대로? 여행 방식을 선택해주세요
                </p>
            </header>
        </div>
    );
};

export default SetTravelTypeHeader;
