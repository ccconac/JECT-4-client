import React from 'react';

interface SelectButtonsProps {
    value: string;
    option: string;
    selected: string;
    onSelect: (value: string) => void;
}

const SelectButton: React.FC<SelectButtonsProps> = ({
    value,
    option,
    selected,
    onSelect,
}) => {
    return (
        <button
            type="button"
            onClick={() => onSelect(value)}
            className={`text-text-sub text-title h-18 w-full rounded ${
                selected === value
                    ? 'bg-input-focus bg-opacity-75 shadow-inner shadow-gray-400'
                    : 'bg-opacity-100 bg-white shadow-md hover:bg-gray-200'
            } transition`}
        >
            {option}
        </button>
    );
};

export default SelectButton;
