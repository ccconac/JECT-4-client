import React from 'react';

interface NextButtonProps {
    onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
    return (
        <button
            className="bg-primary h-12 w-full cursor-pointer rounded-lg text-white transition hover:brightness-90"
            onClick={onClick}
        >
            다음
        </button>
    );
};

export default NextButton;
