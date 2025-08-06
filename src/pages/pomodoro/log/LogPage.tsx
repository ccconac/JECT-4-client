import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MainButton from '../../../components/common/button/MainButton';
import LogMissionItem from './LogMissionItem';

const LogPage = () => {
    const isNextDisabled = false;
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const maxLength = 500;

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <section className="pt-16">
                <h1 className="text-title text-secondary">
                    오늘의 작은 승리, 잘 마쳤어요!
                </h1>
                <p className="text-small text-text-min">
                    집중 세션이 끝났어요. 무엇을 해냈는지 남겨볼까요?
                </p>
                {isOpen ? (
                    <div className="pt-16">
                        <div className="bg-point2 flex flex-col items-center justify-center gap-7 rounded-xl px-6 py-4 text-white shadow-[4px_2px_20px_10px_rgba(248,190,102,0.2)]">
                            <div className="text-[18px] font-semibold">
                                스탬프 이름
                            </div>
                            <div className="text-text-sub w-full">
                                <div className="text-body flex max-h-40 flex-col items-baseline gap-3 overflow-y-auto">
                                    <LogMissionItem />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="text-caption text-text-sub absolute right-11">
                                    {text.length}/{maxLength}
                                </div>
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    maxLength={maxLength}
                                    placeholder="기록하고 싶은 내용을 남겨주세요."
                                    className="text-background text-small mt-5 flex w-full justify-center rounded-md border border-white bg-white/20 p-3"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="pt-16" onClick={() => setIsOpen(true)}>
                        <div className="text-text-sub flex flex-col items-center justify-center gap-8 rounded-xl bg-white p-8 shadow-[4px_2px_20px_10px_rgba(248,190,102,0.2)]">
                            <div className="text-[18px] font-semibold">
                                스탬프 이름
                            </div>
                            <div
                                className="relative inline-block rounded-full font-bold shadow-[0_12px_15px_rgba(255,178,102,0.35)]"
                                style={{ width: 200 }}
                            >
                                <svg className="h-0">
                                    <defs>
                                        <linearGradient
                                            id="gradientId"
                                            x1="100%"
                                            y1="0%"
                                            x2="0%"
                                            y2="100%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#F8BE66"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#FD9230"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <CircularProgressbar
                                    value={100}
                                    text="75:00"
                                    strokeWidth={9}
                                    styles={buildStyles({
                                        pathColor: `url(#gradientId)`,
                                        trailColor: '#EEE7D8',
                                        textColor: '#895C41',
                                        textSize: '20px',
                                    })}
                                />
                            </div>
                            <div className="text-[18px] font-semibold">
                                탭해서 회고하기
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <section className="py-16">
                <MainButton
                    disabled={isNextDisabled}
                    onClick={() => setIsOpen(true)}
                    colorClass="bg-text-sub"
                >
                    확인
                </MainButton>
            </section>
        </div>
    );
};

export default LogPage;
