import SetTravelHeader from '../_components/SetTravelHeader';
import TravelTypeList from './TravelTypeList';

// 로그인 이후 api 응답에서 userName 받아오기
const SetTravelTypePage = () => {
    const userName = '수진';

    return (
        <div className="pt-[106px]">
            <SetTravelHeader
                title={
                    <>
                        {userName}님, <br />
                        당신의 여행 스타일을 알려주세요.
                    </>
                }
                description="마음 가는 대로, 혹은 계획대로? 여행 방식을 선택해주세요"
            />
            <TravelTypeList />
        </div>
    );
};

export default SetTravelTypePage;
