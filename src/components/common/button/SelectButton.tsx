import React from 'react';

interface ToggleButtonsProps {
    option: string;
    selected: string;
    onSelect: (value: string) => void;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ option, selected, onSelect }) => {
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

export default ToggleButtons;
