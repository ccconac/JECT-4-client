import { useSearchParams } from 'react-router';
import SetTravelHeader from '../_components/SetTravelHeader';
import SetTravelNameForm from './SetTravelNameForm';

type travelType = 'course' | 'explore';

const SetTravelNamePage = () => {
    const userName = '수진';

    const searchParams = useSearchParams()[0];
    const travelType = searchParams.get('type') as travelType;

    const travelTypeMap = {
        course: (
            <>
                코스형을 선택한 {userName}님, <br />
                여행의 여정을 계획해봐요!
            </>
        ),
        explore: (
            <>
                탐험형을 선택한 {userName}님, <br />
                여행의 여정을 계획해봐요!
            </>
        ),
    };

    return (
        <div className="pt-[106px] pb-20">
            <SetTravelHeader title={travelTypeMap[travelType]} />
            <SetTravelNameForm travelType={travelType} />
        </div>
    );
};

export default SetTravelNamePage;
