import SetTravelDateInput from './SetTravelDateInput';
import SetTravelMemoInput from './SetTravelMemoInput';
import SetTravelNameInput from './SetTravelNameInput';
import SetFinishDateModal from '../_components/SetFinishDateModal';
import { useState } from 'react';

const CreateTravelLinearForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(!isOpen);
        console.log('modal open');
    };

    return (
        <div>
            <form className="mt-[46px] flex flex-col gap-[7px]">
                <SetTravelDateInput labelName="startDate" />
                <SetTravelDateInput
                    labelName="finishDate"
                    onModalToggle={handleModalOpen}
                />
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
            {isOpen && <SetFinishDateModal />}
        </div>
    );
};

export default CreateTravelLinearForm;
