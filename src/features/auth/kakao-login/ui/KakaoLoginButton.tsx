const KakaoLoginButton = () => {
    const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const K_REDIRECT_URI = window.location.origin + '/oauth/callback/kakao';
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <button
            className="w-full cursor-pointer border-0 bg-white p-0"
            style={{ backgroundColor: 'white' }}
            aria-label="카카오 로그인"
            onClick={handleKakaoLogin}
        >
            <img
                src="/src/shared/assets/images/kakao_login.png"
                alt="카카오 로그인"
                className="block h-auto w-full"
            />
        </button>
    );
};

export default KakaoLoginButton;
