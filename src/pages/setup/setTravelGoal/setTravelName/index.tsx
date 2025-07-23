import SetTravelHeader from '../_components/SetTravelHeader';
import SetTravelNameForm from './SetTravelNameForm';

const SetTravelNamePage = () => {
    const userName = '수진';
    return (
        <div className="pt-[106px] pb-20">
            <SetTravelHeader
                title={
                    <>
                        코스형을 선택한 {userName}님, <br />
                        여행의 여정을 계획해봐요!
                    </>
                }
            />
            <SetTravelNameForm />
        </div>
    );
};

export default SetTravelNamePage;
