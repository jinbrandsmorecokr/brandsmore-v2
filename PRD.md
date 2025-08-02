# Brandsmore AI 웹사이트 PRD (제품 요구사항 정의서)

## 1. 프로젝트 개요

### 1.1 프로젝트 명
**Brandsmore AI 기업 웹사이트**

### 1.2 프로젝트 목적
AI 기술 기반의 혁신적인 솔루션을 제공하는 Brandsmore의 기업 웹사이트로, 세 가지 핵심 서비스(AI RAG, AI Education, K-Medical)를 소개하고 고객과의 접점을 제공하는 플랫폼

### 1.3 비즈니스 목표
- AI 솔루션에 대한 브랜드 인지도 향상
- 잠재 고객 발굴 및 리드 생성
- 기업 신뢰도 및 전문성 구축
- 서비스별 상세 정보 제공 및 문의 유도

## 2. 제품 개요

### 2.1 제품 설명
Next.js 기반의 반응형 기업 웹사이트로, 뉴모피즘(Neumorphism) 디자인을 적용한 모던하고 세련된 UI/UX를 제공

### 2.2 타겟 사용자
- **1차 타겟**: 기업 의사결정자 (C-Level, IT 담당자)
- **2차 타겟**: AI 솔루션 도입을 검토하는 중간관리자
- **3차 타겟**: 의료 관광 서비스 이용 희망자

### 2.3 핵심 가치 제안
- **AI RAG**: 기업 지식 관리의 혁신적 솔루션
- **AI Education**: 맞춤형 AI 교육 프로그램
- **K-Medical**: AI 기반 의료 관광 서비스

## 3. 기능 요구사항

### 3.1 핵심 페이지 구조

#### 3.1.1 메인 페이지 (/)
- **Hero Section**: 브랜드 메시지 및 핵심 서비스 링크
- **Services Section**: 3개 핵심 서비스 소개
- **Stats Section**: 주요 성과 지표 표시
- **Header**: 전역 네비게이션 (About, AI RAG, AI Education, AI K-Medical, Blog, Contact)
- **Footer**: 회사 정보 및 연락처

#### 3.1.2 서비스 상세 페이지
**AI RAG 솔루션 (/rag-solution)**
- 서비스 개요 및 주요 기능
- 사용 사례 (법률, 의료, 금융, 기술 문서)
- 통합 가능한 플랫폼 (Microsoft 365, Google Workspace 등)
- 성과 지표 (10배 빠른 검색, 95% 정확도 등)

**AI Education (/ai-education)**
- 교육 프로그램 소개 (C-Level AI 전략, 구현 로드맵 등)
- 대상 산업 (제조업, 금융업, 유통/서비스 등)
- 교육 특징 (1:1 맞춤, 유연한 스케줄링 등)
- 프로그램 통계 (2,600개 대상 기업, 6주 완성 등)

**K-Medical (/k-medical)**
- 의료 서비스 분야 (성형외과, 피부과, 치과, 종합 케어)
- 서비스 대상 국가 (중국, 일본, 동남아시아 등)
- AI 기능 (24시간 상담, 병원 매칭, 예약 시스템 등)
- 서비스 이점 (합리적 가격, 최고 품질, 빠른 예약 등)

#### 3.1.3 회사 소개 페이지 (/about)
- 회사 스토리 및 비전
- 핵심 가치 (Innovation, Trust & Security, Collaboration, Excellence)
- 팀 소개 (CEO, CTO, Head of AI Research, Head of Product)
- CTA 섹션

#### 3.1.4 블로그 페이지 (/blog)
- 카테고리별 필터링 (AI Insights, Technology, Healthcare, Education)
- 추천 게시물 섹션
- 게시물 목록 (제목, 요약, 작성자, 날짜, 읽기 시간)
- 반응형 그리드 레이아웃

#### 3.1.5 연락처 페이지 (/contact)
- 문의 양식 (이름, 이메일, 회사, 관심 서비스, 메시지)
- 연락처 정보 (주소, 이메일, 전화번호)
- 팀 멤버 연락처
- 양식 검증 및 제출 처리

### 3.2 공통 컴포넌트

#### 3.2.1 Header 컴포넌트
- 브랜드 로고 (Pacifico 폰트)
- 반응형 네비게이션 메뉴
- 모바일 햄버거 메뉴
- 뉴모피즘 스타일 버튼

#### 3.2.2 Footer 컴포넌트
- 4개 섹션 (브랜드, 서비스, 회사, 연락처)
- 서비스 및 페이지 링크
- 저작권 정보

### 3.3 디자인 시스템

#### 3.3.1 컬러 팔레트
- **Primary**: Gray-100 (#F3F4F6)
- **Text**: Gray-800 (#1F2937), Gray-600 (#4B5563)
- **Background**: Gray-100, Gray-50

#### 3.3.2 타이포그래피
- **브랜드 폰트**: Pacifico (로고 및 브랜드명)
- **본문 폰트**: Karla (일반 텍스트)
- **폰트 웨이트**: Light (300), Normal (400)

#### 3.3.3 뉴모피즘 디자인
- **Raised 효과**: `shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]`
- **Pressed 효과**: `shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]`
- **Hover 효과**: 부드러운 전환 애니메이션

## 4. 기술 요구사항

### 4.1 기술 스택
- **프레임워크**: Next.js 14+ (React 18+)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **폰트**: Google Fonts (Karla, Pacifico)
- **아이콘**: Remix Icon
- **이미지**: Readdy AI API를 통한 동적 이미지 생성

### 4.2 주요 의존성
```json
{
  "react": "^18",
  "react-dom": "^18", 
  "next": "14.2.18",
  "@react-google-maps/api": "^2.20.3",
  "recharts": "^2.13.3"
}
```

### 4.3 개발 환경
- **Node.js**: 18+
- **패키지 매니저**: npm
- **개발 서버**: Next.js dev server (포트 3000)

### 4.4 파일 구조
```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 전역 레이아웃
│   ├── page.tsx           # 메인 페이지
│   ├── about/page.tsx     # 회사 소개
│   ├── blog/page.tsx      # 블로그
│   ├── contact/page.tsx   # 연락처
│   ├── rag-solution/page.tsx    # AI RAG 서비스
│   ├── ai-education/page.tsx    # AI 교육 서비스
│   └── k-medical/page.tsx       # K-Medical 서비스
├── components/            # 재사용 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   └── StatsSection.tsx
├── public/               # 정적 파일
├── styles/              # 전역 스타일
└── 설정 파일들
```

## 5. 성능 요구사항

### 5.1 로딩 성능
- **First Contentful Paint**: < 1.5초
- **Largest Contentful Paint**: < 2.5초
- **Cumulative Layout Shift**: < 0.1

### 5.2 반응형 지원
- **모바일**: 320px - 768px
- **태블릿**: 768px - 1024px  
- **데스크톱**: 1024px+

### 5.3 브라우저 호환성
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 6. 사용자 경험 요구사항

### 6.1 네비게이션
- 직관적이고 일관된 메뉴 구조
- 모바일에서 햄버거 메뉴 제공
- 현재 페이지 표시

### 6.2 인터랙션
- 부드러운 호버 효과
- 뉴모피즘 스타일의 버튼 피드백
- 로딩 상태 표시

### 6.3 접근성
- 키보드 네비게이션 지원
- 적절한 색상 대비
- 스크린 리더 호환성

## 7. 콘텐츠 요구사항

### 7.1 이미지
- Readdy AI API를 통한 고품질 이미지
- 반응형 이미지 최적화
- 적절한 alt 텍스트

### 7.2 텍스트 콘텐츠
- 전문적이고 신뢰할 수 있는 톤앤매너
- SEO 최적화된 제목 및 설명
- 명확하고 간결한 서비스 설명

### 7.3 다국어 지원 (향후 확장)
- 한국어 (기본)
- 영어
- 중국어 (간체)

## 8. 보안 요구사항

### 8.1 데이터 보호
- 문의 양식 데이터 암호화
- HTTPS 강제 적용
- 개인정보 처리방침 준수

### 8.2 입력 검증
- 클라이언트 및 서버 사이드 검증
- XSS 공격 방지
- CSRF 토큰 적용

## 9. 배포 및 운영

### 9.1 배포 환경
- **개발**: localhost:3000
- **스테이징**: staging.brandsmore.ai
- **프로덕션**: brandsmore.ai

### 9.2 모니터링
- 성능 모니터링
- 에러 추적
- 사용자 행동 분석

## 10. 향후 확장 계획

### 10.1 기능 확장
- 사용자 계정 시스템
- 온라인 상담 예약 시스템
- 실시간 채팅 지원
- 다국어 지원

### 10.2 기술 개선
- PWA 지원
- 오프라인 기능
- 고급 SEO 최적화
- A/B 테스트 도구 통합

## 11. 성공 지표 (KPI)

### 11.1 비즈니스 지표
- 월간 방문자 수: 10,000+
- 문의 전환율: 3%+
- 평균 세션 시간: 3분+
- 바운스율: 50% 이하

### 11.2 기술 지표
- 페이지 로드 시간: 2초 이하
- 모바일 친화성 점수: 95+
- SEO 점수: 90+
- 접근성 점수: 95+

---

**문서 버전**: 1.0  
**작성일**: 2025년 1월 27일  
**작성자**: AI Assistant  
**승인자**: Brandsmore 개발팀