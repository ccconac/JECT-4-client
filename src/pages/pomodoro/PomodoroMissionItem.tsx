const PomodoroMissionItem = () => {
    return (
        <div className="flex items-center">
            <input
                id="chk"
                type="checkbox"
                className="accent-text-sub h-5 w-5"
            />
            <label htmlFor="chk" className="ml-4">
                유형연습 Q8-10 복습
            </label>
        </div>
    );
};

export default PomodoroMissionItem;
