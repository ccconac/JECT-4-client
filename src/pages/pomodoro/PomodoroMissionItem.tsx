type missionProps = {
    id: number;
    name: string;
    memo: string;
};

const PomodoroMissionItem = ({ id, name }: missionProps) => {
    return (
        <div className="flex items-center">
            <input
                id={String(id)}
                type="checkbox"
                className="accent-text-sub h-5 w-5"
            />
            <label htmlFor="chk" className="ml-4">
                {name}
            </label>
        </div>
    );
};

export default PomodoroMissionItem;
