import BackHeader from '../../../../components/common/BackHeaderLayout';
import MainButton from '../../../../components/common/button/MainButton';
import SetStampCard from './SetStampCard';

const SetStampLinearPage = () => {
    const isNextDisabled = false;
    const handleSubmit = () => {
        console.log('여행 생성');
    };
    return (
        <div className="flex min-h-screen flex-col justify-between">
            <BackHeader />
            <section className="mb-12 rounded-lg pt-16 pb-5">
                <h1 className="text-title text-secondary">
                    여행의 여정을 구성해보세요.
                    <br />
                    목표를 순서대로 입력해 주세요.
                </h1>
                <p className="text-small text-text-min pt-1">
                    계획 된 순서와 단계에 따라 진행하는 목표입니다.
                </p>
                <div className="mt-12">
                    <SetStampCard />
                </div>
            </section>
            <section className="py-5">
                <MainButton
                    disabled={isNextDisabled}
                    onClick={() => {
                        if (!isNextDisabled) {
                            handleSubmit();
                        }
                    }}
                ></MainButton>
            </section>
        </div>
    );
};

export default SetStampLinearPage;
