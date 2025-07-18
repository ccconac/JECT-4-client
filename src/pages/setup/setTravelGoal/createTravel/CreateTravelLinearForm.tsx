import SetTravelDateInput from './SetTravelDateInput';
import SetTravelMemoInput from './SetTravelMemoInput';
import SetTravelNameInput from './SetTravelNameInput';

const CreateTravelLinearForm = () => {
    return (
        <main className="mt-[46px] flex flex-col gap-[7px]">
            <SetTravelDateInput labelName="출발일" />
            <SetTravelDateInput labelName="도착일" />
            <span className="text-point1 text-small">
                * 필수로 입력해주세요.{' '}
            </span>
            <SetTravelNameInput />
            <SetTravelMemoInput />
        </main>
    );
};

export default CreateTravelLinearForm;
