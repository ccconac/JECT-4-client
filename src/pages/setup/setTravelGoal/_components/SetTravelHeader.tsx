import { useNavigate } from 'react-router';
import arrowBackIcon from '../../../../assets/icons/arrow_back.svg';

interface SetTravelHeaderProps {
    title: (userName: string) => JSX.Element;
    description?: string;
}

const SetTravelHeader = ({ title, description }: SetTravelHeaderProps) => {
    const navigate = useNavigate();
    return (
        <div>
            <img
                src={arrowBackIcon}
                alt="뒤로 가기"
                className="mb-[17px] cursor-pointer"
                onClick={() => navigate(-1)}
            />
            <header className="flex flex-col gap-1">
                <h1 className="text-secondary text-title">{title}</h1>
                <p className="text-text-min text-small">{description}</p>
            </header>
        </div>
    );
};

export default SetTravelHeader;
