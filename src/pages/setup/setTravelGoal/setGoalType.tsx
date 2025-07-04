    import React, { useState } from "react";

    const travelTypes = [
    {
        key: "course",
        title: "코스형",
        description: "계획 된 순서와 단계에 따라 진행하는 목표입니다.",
        recommend: "자격증 취득이나 시험 준비를 하고 계신 분들에게 추천해요",
        color: "bg-[#F8BE66]",
        textColor: "text-[#364B59]",
    },
    {
        key: "explore",
        title: "탐험형",
        description: "정해진 경로 없이 자유롭게 나아가는 목표입니다.",
        recommend: "다양한 문제를 시도하시는 분들에게 추천해요",
        color: "bg-[#F0816D]",
        textColor: "text-[#364B59]",
    },
    ];

    const SetGoalTypePage: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[#FFFAEF] flex flex-col items-center px-5 py-8 sm:py-12">
        <header className="w-full max-w-md mx-auto mb-8">
            <h1 className="text-2xl font-bold text-[#364B59] mb-1 leading-tight">
            여행유형을 선택해 주세요
            </h1>
            <p className="text-sm text-[#757575]">
            마음 가는 대로, 혹은 계획대로? 여행 방식을 선택해주세요
            </p>
        </header>
        <section className="w-full max-w-md flex flex-col gap-4 mb-10">
            {travelTypes.map((type) => (
            <button
                key={type.key}
                type="button"
                onClick={() => setSelectedType(type.key)}
                className={`rounded-xl shadow-md flex flex-col items-start px-6 py-5 ${type.color} transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#6FC8BE] border-2 ${selectedType === type.key ? 'border-[#6FC8BE]' : 'border-transparent'}`}
                aria-pressed={selectedType === type.key}
            >
                <h2 className={`text-xl font-bold mb-1 ${type.textColor}`}>{type.title}</h2>
                <span className="text-sm text-[#757575] mb-2">{type.description}</span>
                <span className="text-xs text-[#757575]">{type.recommend}</span>
            </button>
            ))}
        </section>
        <footer className="w-full max-w-md mt-auto flex flex-col items-center py-4">
            <button
            type="button"
            className="w-full rounded-lg bg-[#6FC8BE] text-white font-bold py-3 text-base shadow-md active:scale-95 transition disabled:opacity-50"
            disabled={!selectedType}
            >
            다음
            </button>
        </footer>
        </main>
    );
    };

    export default SetGoalTypePage;
