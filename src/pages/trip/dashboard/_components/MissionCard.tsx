import React from 'react';
import XboxIcon from '../../../../assets/icons/x.svg?react';

export interface MissionItem {
    id: string;
    text: string;
    isEditing: boolean;
    isChecked: boolean;
}

interface MissionCardProps {
    mission: MissionItem;
    onChange: (id: string, value: string) => void;
    onEditToggle: (id: string, index: number) => void;
    onDelete: (id: string) => void;
    onToggleCheck: (id: string) => void;
    isEditMode: boolean;
    index: number;
}

const MissionCard: React.FC<MissionCardProps> = ({
    mission,
    onChange,
    onEditToggle,
    isEditMode,
    onDelete,
    onToggleCheck,
    index, // 추가된 index
}) => {
    return (
        <article
            className="mb-2 flex h-[4.4375rem] items-center justify-between rounded-xl bg-white py-[1.4375rem] pr-6 pl-[1.125rem] shadow-[3px_4px_8px_0_rgba(0,0,0,0.08)]" // margin-bottom 추가 (미션 카드 간 간격)
        >
            {mission.isEditing ? (
                <input
                    type="text"
                    value={mission.text}
                    onChange={(e) => onChange(mission.id, e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            onEditToggle(mission.id, index);
                        }
                    }}
                    onBlur={() => onEditToggle(mission.id, index)}
                    className="w-full text-lg font-medium placeholder-[#CDCDCD] outline-none"
                    placeholder="할 일을 입력하세요."
                    autoFocus
                />
            ) : (
                <span
                    className="text-secondary flex-grow cursor-pointer text-lg font-semibold"
                    onClick={() => onEditToggle(mission.id, index)}
                >
                    {mission.text || '새 미션을 입력하세요.'}
                </span>
            )}
            {isEditMode ? (
                <button
                    type="button"
                    aria-label="미션 삭제"
                    className="ml-4 h-8 w-8 cursor-pointer"
                    onClick={() => onDelete(mission.id)}
                >
                    <XboxIcon
                        aria-hidden="true"
                        className="h-8 w-8 cursor-pointer"
                    />
                </button>
            ) : (
                <input
                    checked={mission.isChecked}
                    onChange={() => onToggleCheck(mission.id)}
                    type="checkbox"
                    className="accent-text-sub ml-4 h-5 w-5"
                />
            )}
        </article>
    );
};

export default MissionCard;
