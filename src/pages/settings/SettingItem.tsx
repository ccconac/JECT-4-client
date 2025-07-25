import ArrowIcon from '../../assets/icons/arrow.svg?react';

interface SettingItemProps {
    label: string;
    onClick?: () => void;
}

const SettingItem = ({ label, onClick }: SettingItemProps) => {
    return (
        <button
            onClick={onClick}
            className="text-secondary flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-5"
        >
            <div>{label}</div>
            <ArrowIcon className="h-3 w-3" />
        </button>
    );
};

export default SettingItem;
