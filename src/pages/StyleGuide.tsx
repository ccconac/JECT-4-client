export default function StyleGuide() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* 메인 헤더 섹션 */}
            <section className="from-primary-500 to-primary-600 mb-12 rounded-lg bg-gradient-to-r p-12 text-center">
                <h1 className="text-display mb-4 text-gray-900">디자인 토큰 가이드</h1>
            </section>

            {/* 타이포그래피 테스트 섹션 */}
            <section className="mb-8 rounded-lg bg-white p-8">
                <h2 className="text-title mb-6 border-b pb-4 text-gray-900">타이포그래피 테스트</h2>

                <div className="space-y-4">
                    <div>
                        <span className="text-caption mb-1 block text-gray-500">text-display</span>
                        <h1 className="text-display text-gray-900">
                            메인 페이지 제목 (32px, Bold)
                        </h1>
                    </div>

                    <div>
                        <span className="text-caption mb-1 block text-gray-500">text-title</span>
                        <h2 className="text-title text-gray-800">섹션 제목 (24px, Semi-Bold)</h2>
                    </div>

                    <div>
                        <span className="text-caption mb-1 block text-gray-500">text-subtitle</span>
                        <h3 className="text-subtitle text-gray-700">소제목 (20px, Bold)</h3>
                    </div>

                    <div>
                        <span className="text-caption mb-1 block text-gray-500">text-body</span>
                        <p className="text-body text-gray-600">
                            본문 텍스트입니다. 일반적인 내용을 표시할 때 사용합니다. (16px, Regular)
                        </p>
                    </div>

                    <div>
                        <span className="text-caption mb-1 block text-gray-500">text-small</span>
                        <p className="text-small text-gray-500">
                            작은 본문 텍스트입니다. 부가 정보를 표시할 때 사용합니다. (14px,
                            Regular)
                        </p>
                    </div>

                    <div>
                        <span className="text-caption mb-1 block text-gray-500">text-caption</span>
                        <p className="text-caption text-gray-400">
                            캡션 텍스트입니다. 날짜, 라벨 등에 사용합니다. (12px, Regular)
                        </p>
                    </div>
                </div>
            </section>

            {/* 색상 테스트 섹션 */}
            <section className="mb-8 rounded-lg bg-white p-8">
                <h2 className="text-title mb-6 border-b pb-4 text-gray-900">색상 테스트</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h3 className="text-subtitle mb-4 text-gray-800">Basic Colors</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-primary">primary #6FC8BE</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-secondary">secondary #364B59</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-background">
                                    background #FFF8E9
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-point1">point-1 #F0816D</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-point2">point-2 #F8BE66</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-text-sub">text-sub #895C41</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-text-min">text-min #757575</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-dim">dim #F8F7F5</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-small text-dim-variant">
                                    dim-variant #EAEAEA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
