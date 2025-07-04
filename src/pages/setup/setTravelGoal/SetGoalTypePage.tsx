import React from "react";

const travelTypes = [
  {
    key: "course",
    title: "코스형",
    description: "계획된 순서와 단계에 따라 진행하는 목표입니다.",
    recommend: "자격증 취득이나 시험 준비를 하고 계신 분들에게 추천해요",
    color: "text-[#F8BE66]",
    border: "border-[#F8BE66]",
  },
  {
    key: "explore",
    title: "탐험형",
    description: "정해진 경로 없이 자유롭게 나아가는 목표입니다.",
    recommend: "다양한 문제를 시도하시는 분들에게 추천해요",
    color: "text-[#F0816D]",
    border: "border-[#F0816D]",
  },
];

const SetGoalTypePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFFAEF] flex flex-col items-center px-4 py-8 sm:py-12">
      <header className="w-full max-w-md mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#364B59] mb-2 leading-tight">
          수진님,<br />
          <span className="font-normal">당신의 여행 스타일을 알려주세요.</span>
        </h1>
        <p className="text-base text-[#757575] mb-6">
          마음 가는 대로, 혹은 계획대로? 여행 방식을 선택해주세요
        </p>
      </header>
      <section className="w-full max-w-md flex flex-col gap-6">
        {travelTypes.map((type) => (
          <div
            key={type.key}
            className="bg-white rounded-2xl shadow-md px-6 py-7 flex flex-col gap-2 mb-2"
          >
            <span className={`text-3xl mb-1 ${type.color}`}>{type.title}</span>
            <span className="text-base text-[#364B59] mb-1">{type.description}</span>
            <span className="text-sm text-[#757575] border-t border-[#E0E0E0] pt-2 mt-2">{type.recommend}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SetGoalTypePage;
