import { useSearchParams } from 'react-router';
import SetTravelHeader from '../_components/SetTravelHeader';
import SetTravelNameForm from './SetTravelNameForm';

const SetTravelNamePage = () => {
    const userName = '수진';

    // url 에서 가져와서 form 조건부 렌더링
    // 코스형 -> title={titleMap.course} // SetTravelHeader
    // 코스형 -> travelType="COURSE" // SetTravelNameForm

    const searchParams = useSearchParams()[0];
    const travelType = searchParams.get('type') || 'course'; // 기본값 : 'course'
    console.log(travelType);

    const TRAVEL_TYPE_MAP = {
        COURSE: {
            title: (userName: string) => (
                <>
                    코스형을 선택한 {userName}님, <br />
                    여행의 여정을 계획해봐요!
                </>
            ),
            formType: 'COURSE',
        },
        EXPLORE: {
            title: (userName: string) => (
                <>
                    자유형을 선택한 {userName}님, <br />
                    여행의 여정을 계획해봐요!
                </>
            ),
            formType: 'EXPLORE',
        },
    };

    return (
        <div className="pt-[106px] pb-20">
            <SetTravelHeader title={TRAVEL_TYPE_MAP.EXPLORE.title} />
            <SetTravelNameForm travelType={TRAVEL_TYPE_MAP.EXPLORE.formType} />
        </div>
    );
};

export default SetTravelNamePage;
