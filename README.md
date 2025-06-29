# StudyTrip

> "목표를 위한 하나의 여행" - 특정 목표를 달성하기 위한 학습 여정을 체계적으로 관리하는 서비스입니다.

<br/>
<br/>

# 📖 프로젝트 소개

학습 목표 달성의 어려움과 동기 부여 부족 문제를 해결하기 위한 서비스입니다. <br/>
취준생, 사회초년생, 학생이 목표를 설정하면, 스탬프, 뽀모도로 기능 등을 통해 목표 달성까지 사용자를 지원할 수 있도록 설계되었습니다.

### 프로젝트 설계 배경

기존 학습 앱들은 단순한 시간 기록이나 일반적인 동기부여에 그쳐, 개인의 구체적인 목표와 학습 과정을 체계적으로 관리하기 어려웠습니다.
학습자들이 중장기 목표를 설정하고도 일관된 동기 유지와 진행 상황 추적의 어려움을 겪고 있다고 판단하여, 이를 '여행'이라는 직관적 메타포로 해결하고자 했습니다

<br/>
<br/>

# 📜 주요 기능

- 목표별 독립 관리: 각 목표를 하나의 '여행'으로 설정하여 독립적으로 관리
- 뽀모도로 집중 타이머: 25분 집중 학습과 체계적인 휴식 관리
- 학습 기록 및 회고: 일일 학습 내용, 느낀 점, 질문사항 기록

<br/>
<br/>

# 🛠 기술 스택

### Frontend

- **Language**: TypeScript 5.8.3
- **Library**: React 18.3.1
- **Styling**: TailwindCSS 4.1
- **State Management**: Zustand + TanStack Query

### 개발 도구

- **Code Format**: Prettier, ESLint
- **Package Manager**: npm

<br/>
<br/>

# 📁 폴더 구조

```tsx
src/
├── app/                 # 앱 설정 및 라우팅
│   ├── providers/      # Context Provider 설정
│   ├── routes/         # 라우팅 설정
│   └── styles/         # 전역 스타일
├── entities/           # 비즈니스 엔티티 (도메인별 분리)
│   ├── user/          # 사용자 관련 로직
│   ├── trip/          # 여행 관련 로직
│   ├── milestone/     # 마일스톤 관련 로직
│   ├── pomodoro/      # 뽀모도로 관련 로직
│   ├── study-log/     # 학습 기록 관련 로직
│   ├── subtask/       # 서브태스크 관련 로직
│   └── notification/  # 알림 관련 로직
├── features/           # 기능별 모듈
│   ├── auth/          # 인증 기능 (카카오 로그인, 로그아웃)
│   ├── pomodoro/      # 뽀모도로 기능
│   ├── milestone-management/    # 마일스톤 관리 기능
│   ├── study-logging/ # 학습 기록 기능
│   ├── subtask-management/      # 서브태스크 관리 기능
│   ├── trip-management/         # 여행 관리 기능
│   ├── statistics/    # 통계 기능
│   ├── settings/      # 설정 기능
│   └── user-setup/    # 사용자 설정 기능
├── pages/             # 페이지 컴포넌트
│   ├── auth/         # 인증 페이지
│   └── onboarding/   # 온보딩 페이지
├── shared/            # 공통 모듈
│   ├── api/          # API 설정 (base, endpoints, interceptors)
│   ├── config/       # 환경 설정
│   ├── lib/          # 유틸리티, 상수, 훅, 스토어
│   └── ui/           # 공통 UI 컴포넌트
└── widgets/           # 복합 위젯 컴포넌트
    ├── navigation/   # 네비게이션
    └── pomodoro-timer/ # 뽀모도로 타이머
```

### Feature-Sliced Design 아키텍쳐 적용

- 도메인별로 `entities` 폴더에서 비즈니스 로직 관리 (api, model, ui 분리)
- 기능별로 `features` 폴더에서 UI와 로직 결합
- `shared` 폴더에서 공통 모듈 중앙 관리
- `pages` 폴더 는 추후 기능 개발 중 페이지 추가 예정입니다.

<br/>
<br/>

# 👥 팀원 소개

| 역할     | 이름   | GitHub                                     |
| -------- | ------ | ------------------------------------------ |
| Frontend | 장해명 | [@jjaneyxx](https://github.com/jjaneyxx)   |
| Frontend | 박지영 | [@arida0511](https://github.com/arida0511) |
|          |        |                                            |
