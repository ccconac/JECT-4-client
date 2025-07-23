import NextButton from '../../../../components/common/button/NextButton';
import SetTravelDateInput from './SetTravelDateInput';
import SetTravelMemoInput from './SetTravelMemoInput';
import SetTravelNameInput from './SetTravelNameInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
    startDate: string;
    finishDate: string;
    name: string;
    memo: string;
};

const CreateTravelLinearForm = () => {
    // modal
    const [isOpen, setIsOpen] = useState(false);

    const handleModalOpen = () => {
        setIsOpen(!isOpen);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <div>
            <form
                className="mt-[46px] flex flex-col gap-[7px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <SetTravelDateInput labelName="startDate" />
                <SetTravelDateInput
                    labelName="finishDate"
                    onModalToggle={handleModalOpen}
                    register={register}
                />
                <span className="text-point1 text-small">
                    * 필수로 입력해주세요.{' '}
                </span>
                <SetTravelNameInput register={register} />
                <SetTravelMemoInput register={register} />
                <NextButton type="submit" />
            </form>
        </div>
    );
};

export default CreateTravelLinearForm;
