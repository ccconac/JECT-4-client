import SetTravelDateInput from './SetTravelDateInput';
import SetTravelMemoInput from './SetTravelMemoInput';
import SetTravelNameInput from './SetTravelNameInput';

const CreateTravelLinearForm = () => {
    return (
        <form className="mt-[46px] flex flex-col gap-[7px]">
            <SetTravelDateInput labelName="startDate" />
            <SetTravelDateInput labelName="finishDate" />
            <span className="text-point1 text-small">
                * 필수로 입력해주세요.{' '}
            </span>
            <SetTravelNameInput />
            <SetTravelMemoInput />

            <button
                className="bg-text-min mx-auto mt-[94px] flex h-[51px] w-[350px] cursor-pointer flex-row items-center justify-center gap-[10px] rounded-md px-[161px] py-4 font-medium text-white"
                type="submit"
            >
                다음
            </button>
        </form>
    );
};

export default CreateTravelLinearForm;
