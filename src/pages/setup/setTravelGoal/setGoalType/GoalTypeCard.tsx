export default function GoalTypeCard() {
    const travelTypes = [
        {
            key: 'course',
            title: '코스형',
            description: '계획된 순서와 단계에 따라 진행하는 목표입니다.',
            recommend: '자격증 취득이나 시험 준비를 하고 계신 분들에게 추천해요',
        },
        {
            key: 'explore',
            title: '탐험형',
            description: '정해진 경로 없이 자유롭게 나아가는 목표입니다.',
            recommend: '다양한 문제를 시도하시는 분들에게 추천해요',
        },
    ];

    return (
        <section className="rounded-xl bg-white px-10 py-7.5 shadow-md">
            <main>
                <h3 className="text-point2 text-display">{travelTypes[0].title}</h3>
                <p className="relative flex flex-col gap-3">
                    <span className="text-text-min text-[14px]">{travelTypes[0].description}</span>
                    <hr className="border-primary absolute top-1/2 right-0 left-0 border-0 border-t-[0.3px] border-solid p-0" />
                    {/* 글자 넘침 : text-[11px] 로 조정 */}
                    <span className="text-text-min text-[11px]">{travelTypes[0].recommend}</span>
                </p>
            </main>
        </section>
    );
}
