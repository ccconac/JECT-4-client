interface SetTravelHeaderProps {
    userName: string;
    title: string;
    description?: string;
}

const SetTravelHeader = ({ userName, title, description }: SetTravelHeaderProps) => {
    return (
        <div>
            <img
                src="/assets/icons/arrow_back.svg"
                alt="뒤로 가기"
                className="mb-[17px] cursor-pointer"
                // 클릭 시 뒤로 가기 추가 필요
            />
            <header className="flex flex-col gap-1">
                <h1 className="text-secondary text-title">
                    {userName}님, <br />
                    {title}
                </h1>
                <p className="text-text-min text-small">{description}</p>
            </header>
        </div>
    );
};

export default SetTravelHeader;
