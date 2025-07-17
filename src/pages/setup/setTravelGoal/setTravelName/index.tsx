import SetTravelHeader from '../_components/SetTravelHeader';

// 여행 이름 설정
const SetTravelNamePage = () => {
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
        </div>
    );
};

export default SetTravelNamePage;
