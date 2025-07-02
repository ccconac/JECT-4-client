import React from 'react';

interface SelectButtonsProps {
    option: string;
    selected: string;
    onSelect: (value: string) => void;
}

const SelectButton: React.FC<SelectButtonsProps> = ({ option, selected, onSelect }) => {
    return (
        <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`text-text-sub text-title h-18 w-full rounded ${
                selected === option
                    ? 'bg-input-focus bg-opacity-75 shadow-inner shadow-gray-400'
                    : 'bg-opacity-100 bg-white shadow-md hover:bg-gray-200'
            } transition`}
        >
            {option}
        </button>
    );
};

export default SelectButton;
