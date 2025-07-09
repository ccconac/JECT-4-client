import GoalTypeCard from './GoalTypeCard';

const SetGoalTypePage = () => {
    return (
        <div className="border pt-[106px]">
            <header className="flex flex-col gap-1">
                <h1 className="text-secondary text-title">
                    수진님, <br />
                    당신의 여행 스타일을 알려주세요.
                </h1>
                <p className="text-text-min text-small">
                    마음 가는 대로, 혹은 계획대로? 여행 방식을 선택해주세요
                </p>
            </header>
            <main className="mt-[46px] flex flex-col gap-4">
                <GoalTypeCard />
                <GoalTypeCard />
            </main>
        </div>
    );
};

export default SetGoalTypePage;
