import SetTravelHeader from '../_components/SetTravelHeader';
import CreateTravelLinear from './CreateTravelLinear';

// 여행 이름 설정
const CreateTravelPage = () => {
    const userName = '수진';
    return (
        <div className="pt-[106px]">
            <SetTravelHeader
                title={
                    <>
                        코스형을 선택한 {userName}님, <br />
                        여행의 여정을 계획해봐요!
                    </>
                }
            />
            {/* 여행 이름 설정 (선형, 코스형) */}
            <CreateTravelLinear />
        </div>
    );
};

export default CreateTravelPage;
