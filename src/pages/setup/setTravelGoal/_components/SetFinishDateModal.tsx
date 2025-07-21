import leftArrow from '../../../../assets/icons/left_arrow.svg';
import rightArrow from '../../../../assets/icons/right_arrow.svg';

// p 태그 스타일 확인 필요, figma : 토큰 지정 x, 20px

const SetFinishDateModal = () => {
    return (
        <dialog
            open
            className="fixed top-1/2 left-1/2 h-[360px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-white"
        >
            <header className="mx-2.5 my-4 flex place-content-between">
                <img src={leftArrow} alt="left arrow" />
                <p className="text-text-sub text-subtitle">2025년 7월</p>
                <img src={rightArrow} alt="right arrow" />
            </header>
            <form method="dialog">
                <p>content</p>
                {/* content */}
                <div className="flex">
                    <button className="border">취소</button>
                    <button className="border">완료</button>
                </div>
            </form>
        </dialog>
    );
};

export default SetFinishDateModal;
