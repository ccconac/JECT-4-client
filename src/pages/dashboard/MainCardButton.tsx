import ProgressBar from 'react-customizable-progressbar';

const MainCardButton = () => {
    return (
        <div className="text-secondary flex w-full items-center justify-between rounded-md bg-white px-4 shadow-xl">
            <div>
                <div className="mb-1 flex gap-1.5">
                    <div className="text-subtitle leading-tight">제목</div>
                    <div className="text-body bg-point1 flex items-center rounded-full px-2.5 font-extralight text-white">
                        D-10
                    </div>
                </div>
                <div className="text-caption">메모</div>
            </div>
            <div className="relative">
                <ProgressBar
                    radius={20}
                    progress={50}
                    strokeWidth={6}
                    strokeColor="#6fc8be"
                    trackStrokeColor="#d9d9d9"
                    counterClockwise
                    trackStrokeWidth={6}
                >
                    <div className="text-caption absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
                        50%
                    </div>
                </ProgressBar>
            </div>
        </div>
    );
};

export default MainCardButton;
