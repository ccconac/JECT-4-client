import ProgressBar from 'react-customizable-progressbar';
import XIcon from '../../assets/icons/x.svg?react';

interface MainCardButtonProps {
    travel: {
        id: string;
        title: string;
        memo?: string;
        leftDays: number;
        progress: number;
    };
    isEditMode?: boolean;
    onDelete?: () => void;
}

const MainCardButton = ({
    travel,
    isEditMode,
    onDelete,
}: MainCardButtonProps) => {
    return (
        <div className="text-secondary flex w-full items-center justify-between rounded-md bg-white pl-4 shadow-xl">
            <div>
                <div className="mb-1 flex gap-1.5">
                    <div className="text-subtitle leading-tight">
                        {travel.title}
                    </div>
                    <div className="text-body bg-point1 flex items-center rounded-full px-2.5 font-extralight text-white">
                        D-{travel.leftDays}
                    </div>
                </div>
                <div className="text-caption">{travel.memo}</div>
            </div>
            <div className="relative h-20">
                {isEditMode ? (
                    <button
                        className="absolute top-1/2 right-6 -translate-y-1/2"
                        onClick={onDelete}
                    >
                        <XIcon />
                    </button>
                ) : (
                    <ProgressBar
                        radius={20}
                        progress={travel.progress}
                        strokeWidth={6}
                        strokeColor="#6fc8be"
                        trackStrokeColor="#d9d9d9"
                        counterClockwise
                        trackStrokeWidth={6}
                    >
                        <div className="text-caption absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
                            {travel.progress}%
                        </div>
                    </ProgressBar>
                )}
            </div>
        </div>
    );
};

export default MainCardButton;
