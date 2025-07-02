import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import KakaoLoginButton from '../../../features/auth/kakao-login/ui/KakaoLoginButton';

function KakaoLoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code');

        if (code) {
            // console.log('Kakao OAuth Code:', code);
        }
    }, [navigate]);

    return (
        <div className="flex min-h-screen flex-col justify-between py-14">
            <section className="mb-12 rounded-lg bg-gradient-to-r p-5">
                <Swiper
                    modules={[Scrollbar, Pagination, Autoplay]} // 페이지네이션, 자동재생 등의 기능을 불러옴
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        // 자동 재생
                        delay: 4500, // 지연 시간 (한 슬라이더에 머물르는 시간)
                        disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
                    }}
                    speed={500} // 슬라이더 넘어가는 속도
                >
                    <SwiperSlide>
                        <h1 className="text-display text-secondary">목표를 향한 하나의 여행</h1>
                        <h1 className="text-display text-primary">스터디 트립</h1>
                        <p className="text-small text-text-min">
                            결과보다 과정을, 성취보다 성장의 가치를 발견해봐요
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="text-display text-secondary">스터디 유형 선택</h1>
                        <p className="text-small text-text-min">
                            스터디트립과 함께할 나만의 학습 스타일을 골라주세요!
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="text-display text-secondary">학습 시작</h1>
                        <p className="text-small text-text-min">
                            계획된 학습 일정에 따라 시간을 관리하고,
                            <br />
                            하나씩 완료해 나가요.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="text-display text-secondary">학습 일지 기록</h1>
                        <p className="text-small text-text-min">
                            성취된 학습 내용, 집중 시간, 그리고 메모를
                            <br />
                            학습 일지 기록에서 바로 확인하고 성장 과정을 되돌아보세요!
                        </p>
                        <p className="text-small text-point2">
                            한 걸음 한 걸음, 나의 성장을 담은 스터디트립으로 시작해요.
                        </p>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="p-5">
                <KakaoLoginButton />
            </section>
        </div>
    );
}

export default KakaoLoginPage;
