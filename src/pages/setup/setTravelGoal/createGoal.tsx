    import React, { useState } from "react";

    const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
    const weekNumbers = [1, 2, 3, 4, 5, 6, 7];

    const CreateGoalPage: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<number>(3); // 수요일(4일, index 3)
    const [goalName, setGoalName] = useState("토익뿌시기");
    const [memo, setMemo] = useState("");

    return (
        <main className="min-h-screen bg-[#FFFAEF] flex flex-col items-center px-4 py-8 sm:py-12">
        <section className="w-full max-w-md mx-auto">
            <header className="mb-8">
            <h1 className="text-3xl font-bold text-[#364B59] mb-2 leading-tight">
                이번 여행의 이름은 무엇인가요?
            </h1>
            <p className="text-base text-[#757575] mb-4">
                도착지(목표일)를 설정하면, 여정이 더 선명해져요.
            </p>
            <span className="block text-[#6FC8BE] text-lg font-semibold mb-4">
                2025년 6월 4일부터
            </span>
            <div className="bg-white rounded-xl shadow p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                {weekDays.map((day, index) => (
                    <span key={index} className="text-[#757575] text-base font-medium w-7 text-center">
                    {day}
                    </span>
                ))}
                </div>
                <div className="flex justify-between items-center mb-2">
                {weekNumbers.map((num, index) => (
                    <button
                    key={num}
                    type="button"
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-lg font-semibold transition border-2 ${selectedDay === index ? "border-[#6FC8BE] text-[#364B59]" : "border-transparent text-[#364B59]/80"}`}
                    aria-pressed={selectedDay === index}
                    onClick={() => setSelectedDay(index)}
                    >
                    {num}
                    </button>
                ))}
                </div>
                <div className="flex justify-center">
                <span className="inline-block mt-2">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 18L2 6.5L3.5 5L14 15L24.5 5L26 6.5L14 18Z" fill="#B0B0B0"/>
                    </svg>
                </span>
                </div>
            </div>
            </header>
            <form className="flex flex-col gap-6" autoComplete="off" onSubmit={e => e.preventDefault()}>
            <div>
                <label htmlFor="goalName" className="block text-[#757575] text-lg mb-2 font-medium">여행 이름</label>
                <input
                id="goalName"
                type="text"
                value={goalName}
                onChange={e => setGoalName(e.target.value)}
                placeholder="여행 이름을 입력하세요"
                className="w-full rounded-lg border border-[#895A3F]/60 bg-[#F5F5F5] px-4 py-4 text-2xl font-bold text-[#B0B0B0] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6FC8BE]"
                />
            </div>
            <div>
                <label htmlFor="memo" className="block text-[#757575] text-lg mb-2 font-medium">메모 추가</label>
                <textarea
                id="memo"
                value={memo}
                onChange={e => setMemo(e.target.value)}
                placeholder="꼭 지켜야 할 내용을 작성해 주세요"
                className="w-full rounded-lg border border-[#895A3F]/60 bg-[#F5F5F5] px-4 py-4 text-lg text-[#757575] placeholder-[#B0B0B0] min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#6FC8BE] resize-none"
                />
            </div>
            <button
                type="submit"
                className="w-full rounded-lg bg-[#6FC8BE] text-white font-bold py-4 text-xl shadow-md active:scale-95 transition disabled:opacity-50 mt-8"
            >
                확인
            </button>
            </form>
        </section>
        </main>
    );
    };

    export default CreateGoalPage;
