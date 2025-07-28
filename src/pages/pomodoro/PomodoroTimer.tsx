import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRef } from 'react';

type Props = {
    duration: number;
    elapsedTime: number;
    width?: number;
};

const PomodoroTimer = ({ duration, elapsedTime, width = 200 }: Props) => {
    const gradientId = useRef(
        `gradient-${Math.random().toString(36).substr(2, 9)}`
    ).current;

    const percentage = Math.min((elapsedTime / duration) * 100, 100);
    const formatTime = (seconds: number) => {
        const remaining = Math.max(duration - seconds, 0);
        const min = Math.floor(remaining / 60);
        const sec = Math.floor(remaining % 60);
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <div
            className="relative inline-block rounded-full shadow-[0_12px_15px_rgba(255,178,102,0.35)]"
            style={{ width }}
        >
            <svg className="h-0">
                <defs>
                    <linearGradient
                        id={gradientId}
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#F8BE66" />
                        <stop offset="100%" stopColor="#FD9230" />
                    </linearGradient>
                </defs>
            </svg>

            <CircularProgressbar
                value={percentage}
                text={formatTime(elapsedTime)}
                strokeWidth={6}
                styles={buildStyles({
                    pathColor: `url(#${gradientId})`,
                    trailColor: '#EEE7D8',
                    textColor: '#895C41',
                    textSize: '12px',
                })}
            />
        </div>
    );
};

export default PomodoroTimer;
