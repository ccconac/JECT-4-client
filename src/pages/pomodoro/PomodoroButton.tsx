import PlayIcon from '../../assets/icons/play.svg?react';
import PauseIcon from '../../assets/icons/pause.svg?react';
import StopIcon from '../../assets/icons/stop.svg?react';

type Props = {
    isRunning: boolean;
    isStarted: boolean;
    onStart: () => void;
    onPause: () => void;
    onResume: () => void;
    onReset: () => void;
};

const PomodoroButton = ({
    isRunning,
    isStarted,
    onStart,
    onPause,
    onResume,
    onReset,
}: Props) => {
    if (!isStarted) {
        return (
            <button
                onClick={onStart}
                className="bg-point2 text-body mt-10 rounded-full px-14 py-3 font-semibold text-white shadow-md transition"
            >
                시작
            </button>
        );
    }

    return (
        <div className="mt-9 flex items-center justify-center gap-5">
            {isRunning ? (
                <button
                    onClick={onPause}
                    className="bg-point2 text-background flex h-16 w-16 items-center justify-center rounded-full font-bold"
                >
                    <PauseIcon />
                </button>
            ) : (
                <button
                    onClick={onResume}
                    className="bg-point2 text-background flex h-16 w-16 items-center justify-center rounded-full font-bold"
                >
                    <PlayIcon />
                </button>
            )}
            <div className="flex h-16 w-16 items-center justify-center">
                <button
                    onClick={onReset}
                    className="text-point2 border-point2 bg-background flex h-11 w-11 items-center justify-center rounded-full border font-bold"
                >
                    <StopIcon />
                </button>
            </div>
        </div>
    );
};

export default PomodoroButton;
