import React from 'react';

interface NextButtonProps {
    onClick: () => void;
    disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ disabled, onClick }) => {
    return (
        <button
            disabled={disabled}
            className={`h-12 w-full rounded-lg text-white transition ${disabled ? 'bg-dim-variant cursor-not-allowed' : 'bg-primary cursor-pointer hover:brightness-90'}`}
            onClick={onClick}
        >
            다음
        </button>
    );
};

export default NextButton;
