import { useEffect, useRef, useState } from 'react';
import PomodoroTimer from './PomodoroTimer';
import PomodoroButton from './PomodoroButton';
import BackHeader from '../../components/common/BackHeaderLayout';

const PomodoroPage = () => {
    const totalTime = 25 * 60 * 3; // 총 75분
    const [elapsedTime, setElapsedTime] = useState(0); //경과한 시간(초)
    const [isRunning, setIsRunning] = useState(false); //타이머가 작동 중인지 여부
    const [isStarted, setIsStarted] = useState(false); //타이머가 시작했는지 여부
    const intervalRef = useRef<number | null>(null);
    //const [isAutoStop, setIsAutoStop] = useState(false);
    const [, setIsAutoStop] = useState(false);

    // 자동 정지 타이밍: 25분마다
    const getPausePoints = (duration: number, step: number = 1500) =>
        Array.from(
            { length: Math.floor(duration / step) - 1 },
            (_, i) => (i + 1) * step
        );
    const shouldPauseAt = useRef<number[]>(getPausePoints(totalTime));

    useEffect(() => {
        if (!isRunning) return;

        const start = Date.now() - elapsedTime * 1000;

        intervalRef.current = window.setInterval(() => {
            const nowElapsed = Math.floor((Date.now() - start) / 1000);
            setElapsedTime(nowElapsed);

            if (shouldPauseAt.current.includes(nowElapsed)) {
                setIsRunning(false); // 자동 멈춤
                setIsAutoStop(true);
            }

            if (nowElapsed >= totalTime) {
                clearInterval(intervalRef.current!);
                setIsRunning(false);
                setElapsedTime(totalTime);
                console.log('타이머 완료!');
            }
        }, 1000);

        return () => clearInterval(intervalRef.current!);
    }, [isRunning]);

    const handleStart = () => {
        setIsStarted(true);
        setIsRunning(true);
    };

    const handlePause = () => setIsRunning(false);
    const handleResume = () => {
        setIsRunning(true);
        setIsAutoStop(false);
    };
    const handleReset = () => {
        setIsStarted(false);
        setIsRunning(false);
        setIsAutoStop(false);
        setElapsedTime(0);
    };

    return (
        <div>
            <BackHeader title="진행중인 스탬프 이름" />
            <div className="flex flex-col items-center pt-20">
                <PomodoroTimer
                    duration={totalTime}
                    elapsedTime={elapsedTime}
                    width={250}
                />
                <div className="mt-9 h-20">스탬프 및 미션 표현 모달</div>
                <PomodoroButton
                    isRunning={isRunning}
                    isStarted={isStarted}
                    onStart={handleStart}
                    onPause={handlePause}
                    onResume={handleResume}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};

export default PomodoroPage;
