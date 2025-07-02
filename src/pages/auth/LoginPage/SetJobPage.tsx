import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectButton from '../../../components/common/button/SelectButton';
import NextButton from '../../../components/common/button/NextButton';

function SetJobPage() {
    const [selected, setSelected] = useState<string>('');
    const navigate = useNavigate();
    const handleSelect = (value: string) => {
        setSelected(value);
    };
    return (
        <div className="flex min-h-screen flex-col justify-between py-14">
            <section className="mb-12 rounded-lg bg-gradient-to-r p-5">
                <h1 className="text-display text-secondary">직업을 설정해 주세요.</h1>
                <p className="text-small text-text-min">
                    선택해주신 직업군에 맞는 루틴을 추천해드릴게요.
                </p>
                <div className="mt-12 flex flex-col gap-4">
                    <SelectButton
                        option="학생"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                    <SelectButton
                        option="직장인"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                    <SelectButton
                        option="프리랜서"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                    <SelectButton
                        option="취업준비생"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                </div>
            </section>
            <section className="p-5">
                <NextButton
                    onClick={() => {
                        navigate('/');
                    }}
                ></NextButton>
            </section>
        </div>
    );
}

export default SetJobPage;
