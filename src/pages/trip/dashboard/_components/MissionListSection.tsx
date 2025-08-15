import PlusIcon from '../../../../assets/icons/roundedPlus.svg?react';
import MissionCard from '../_components/MissionCard';
import type { Mission } from '../../../../store/mission/missionsAtom';

interface MissionListSectionProps {
    missions: Mission[];
    allChecked: boolean;
    checkedCount: number;
    isEditMode: boolean;
    onToggleEditMode: () => void;
    onAddMission: () => void;
    onUpdateLabel: (id: number, value: string) => void;
    onDelete: (id: number) => void;
    onToggleEdit: (id: number) => void;
    onToggleCheck: (id: number) => void;
}

const MissionListSection = ({
    missions,
    allChecked,
    checkedCount,
    isEditMode,
    onToggleEditMode,
    onAddMission,
    onUpdateLabel,
    onDelete,
    onToggleEdit,
    onToggleCheck,
}: MissionListSectionProps) => {
    return (
        <section className="pt-[3.25rem]">
            {/* 헤더 영역 */}
            <div className="flex items-center justify-between">
                <span className="text-body font-semibold">
                    {allChecked
                        ? '오늘의 미션을 모두 완료했어요!'
                        : missions.length
                          ? `오늘의 미션, ${missions.length - checkedCount}개 남았어요!`
                          : '오늘의 미션을 먼저 설정해 주세요!'}
                </span>
                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleEditMode}
                        className="cursor-pointer text-sm text-[#585858] underline"
                    >
                        {isEditMode ? '완료' : '편집'}
                    </button>
                    <button
                        type="button"
                        aria-label="미션 추가"
                        className="cursor-pointer"
                        onClick={onAddMission}
                    >
                        <PlusIcon aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* 서브 텍스트 */}
            {allChecked && (
                <span className="text-sm text-[#585858]">
                    더 학습하고 싶다면 미션을 추가해 보세요.
                </span>
            )}

            {/* 미션 카드 리스트 */}
            <div className="flex h-[calc(100vh-25rem)] flex-col gap-3.5 overflow-y-auto px-0.5 py-4">
                {missions.length ? (
                    missions.map((mission) => (
                        <MissionCard
                            key={mission.missionId}
                            label={mission.missionName}
                            isEditing={false}
                            isEditMode={isEditMode}
                            isChecked={mission.completed}
                            onChange={(value) =>
                                onUpdateLabel(mission.missionId, value)
                            }
                            onDelete={() => onDelete(mission.missionId)}
                            onEditToggle={() => onToggleEdit(mission.missionId)}
                            onToggleCheck={() =>
                                onToggleCheck(mission.missionId)
                            }
                        />
                    ))
                ) : (
                    <div className="flex h-[calc(100vh-25rem)] items-center justify-center">
                        <span className="text-body text-[#C6C5BF]">
                            + 버튼을 눌러 미션을 추가할 수 있어요
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MissionListSection;
