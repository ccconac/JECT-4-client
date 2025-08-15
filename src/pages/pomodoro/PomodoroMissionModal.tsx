import PomodoroMissionItem from './PomodoroMissionItem';

interface DailyMission {
    dailyMissionId: number;
    missionName: string;
    missionMemo: string;
}

type Props = {
    isAutoStop: boolean;
    stampName: string;
    focusDurationInMinute: number;
    dailyMissions: DailyMission[];
};

const PomodoroMissionModal = ({
    isAutoStop,
    stampName,
    focusDurationInMinute,
    dailyMissions,
}: Props) => {
    if (isAutoStop) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-title text-text-sub">
                    {focusDurationInMinute}분 집중 완료!
                </div>
                <div className="text-caption text-text-sub">
                    이제 잠깐 숨을 돌릴 시간이에요. 5분 휴식하세요.
                </div>
            </div>
        );
    }

    return (
        <div className="text-text-sub rounded-b-xl bg-white px-7 py-4 shadow-[0_8px_12px_rgba(168,168,168,0.12)]">
            <div className="pb-4 text-[18px] font-semibold">{stampName}</div>
            <div className="text-body flex flex-col gap-4">
                {dailyMissions.map((mission) => (
                    <PomodoroMissionItem
                        key={mission.dailyMissionId}
                        id={mission.dailyMissionId}
                        name={mission.missionName}
                        memo={mission.missionMemo}
                    />
                ))}
            </div>
        </div>
    );
};

export default PomodoroMissionModal;
