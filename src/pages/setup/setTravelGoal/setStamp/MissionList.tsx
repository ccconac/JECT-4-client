interface MissionListProps {
    missions: string[];
}

const colorPalette = ['#5FC2AF', '#FACB5A', '#A26E4E', '#F77B8A']; // 원하는 순서로 반복 가능

const MissionList = ({ missions }: MissionListProps) => {
    return (
        <div className="relative ml-4">
            {/* 세로 라인 */}
            <div className="absolute top-1 bottom-1 left-[5px] w-[2px] bg-[#757575]/20" />

            {/* 각 미션 항목 */}
            <ul className="space-y-5">
                {missions.map((text, index) => (
                    <li key={index} className="flex items-start gap-6">
                        {/* 점 표시 */}
                        <div
                            className="z-10 mt-1 h-3 w-3 rounded-full"
                            style={{
                                backgroundColor:
                                    colorPalette[index % colorPalette.length],
                            }}
                        />
                        {/* 텍스트 */}
                        <p className="text-small text-secondary">{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionList;
