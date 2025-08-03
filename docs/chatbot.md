# 브랜즈모어 웹사이트 챗봇 구현 가이드

## 📋 개요

브랜즈모어 웹사이트에 Dify 기반 AI 챗봇을 통합하여 방문자들이 실시간으로 AI 교육, RAG 솔루션, K-Medical 서비스에 대한 정보를 얻을 수 있도록 구현했습니다.

## 🛠️ 구현 과정

### 1. 기술 스택
- **프레임워크**: Next.js 14 (App Router)
- **챗봇 플랫폼**: Dify
- **스타일링**: Tailwind CSS + 커스텀 CSS

### 2. 구현 단계

#### 단계 1: Next.js Script 컴포넌트 import
```typescript
import Script from "next/script";
```

#### 단계 2: 챗봇 설정 스크립트 추가
```javascript
window.difyChatbotConfig = {
  token: 'XyrDFWfBaDf7gvM9',
  baseUrl: 'http://dify.deskterior.ai',
  systemVariables: {
    // user_id: 'YOU CAN DEFINE USER ID HERE',
    // conversation_id: 'YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID',
  },
  userVariables: {
    // avatar_url: 'YOU CAN DEFINE USER AVATAR URL HERE',
    // name: 'YOU CAN DEFINE USER NAME HERE',
  },
}
```

#### 단계 3: 챗봇 임베드 스크립트 추가
```html
<script 
  src="http://dify.deskterior.ai/embed.min.js" 
  id="XyrDFWfBaDf7gvM9" 
  defer>
</script>
```

#### 단계 4: 브랜드 맞춤 스타일링
```css
#dify-chatbot-bubble-button {
  background-color: #1C64F2 !important;
}
#dify-chatbot-bubble-window {
  width: 24rem !important;
  height: 40rem !important;
}
```

### 3. 파일 구조

```
/Users/brandsmore/Dev/brandsmore/
├── app/
│   ├── layout.tsx          # 챗봇 스크립트 통합
│   └── ...
├── docs/
│   └── chatbot.md          # 이 문서
└── ...
```

### 4. layout.tsx 최종 구현

```typescript
import type { Metadata } from "next";
import { Karla, Pacifico } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// ... 폰트 설정 ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            #dify-chatbot-bubble-button {
              background-color: #1C64F2 !important;
            }
            #dify-chatbot-bubble-window {
              width: 24rem !important;
              height: 40rem !important;
            }
          `
        }} />
      </head>
      <body className={`${karla.variable} ${pacifico.variable} antialiased font-karla`}>
        {children}
        
        {/* Dify 챗봇 설정 */}
        <Script
          id="dify-chatbot-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: 'XyrDFWfBaDf7gvM9',
                baseUrl: 'http://dify.deskterior.ai',
                systemVariables: {},
                userVariables: {},
              }
            `
          }}
        />
        
        {/* Dify 챗봇 임베드 스크립트 */}
        <Script
          src="http://dify.deskterior.ai/embed.min.js"
          id="XyrDFWfBaDf7gvM9"
          defer
        />
      </body>
    </html>
  );
}
```

## 🎨 디자인 특징

### 챗봇 버튼
- **위치**: 우측 하단 고정
- **색상**: `#1C64F2` (브랜즈모어 브랜드 블루)
- **크기**: 48px × 48px
- **모양**: 둥근 원형 (border-radius: 25px)

### 챗봇 창
- **크기**: 24rem × 40rem
- **위치**: 반응형 (버튼 위치에 따라 자동 조정)
- **z-index**: 최상위 레이어

## 🔧 기능 설명

### 1. 자동 위치 조정
- 화면 크기에 따라 챗봇 창 위치 자동 조정
- 모바일/데스크톱 환경 모두 지원

### 2. 키보드 접근성
- ESC 키로 챗봇 창 닫기 가능
- 키보드 네비게이션 지원

### 3. 반응형 디자인
- 다양한 화면 크기에서 최적화된 표시
- 최대/최소 크기 제한으로 사용성 보장

## 📱 사용자 경험

### 챗봇 활용 시나리오
1. **AI 교육 문의**: C-레벨 AI 리더십 프로그램 정보
2. **RAG 솔루션 상담**: 기업 지식 관리 시스템 문의
3. **K-Medical 서비스**: AI 의료 플랫폼 정보
4. **일반 상담**: 회사 정보 및 연락처 안내

### 대화 플로우
```
방문자 → 챗봇 버튼 클릭 → 인사말 표시 → 서비스 선택 → 상세 정보 제공 → 상담 연결
```

## 🚀 배포 및 운영

### 환경 설정
- **개발 환경**: `npm run dev` (localhost:3000)
- **프로덕션**: Next.js 빌드 후 배포

### 모니터링 포인트
- 챗봇 로딩 시간
- 사용자 상호작용 빈도
- 오류 발생 여부
- 응답 품질

## 🔒 보안 고려사항

### 1. 스크립트 보안
- `dangerouslySetInnerHTML` 사용 시 XSS 방지
- 외부 스크립트 도메인 검증

### 2. 데이터 보호
- 사용자 대화 데이터 암호화
- GDPR 준수를 위한 데이터 처리 정책

## 📈 향후 개선 계획

### 1. 기능 확장
- 다국어 지원 (한국어/영어)
- 파일 업로드 기능
- 음성 인식 지원

### 2. 성능 최적화
- 지연 로딩 구현
- 캐싱 전략 적용
- CDN 활용

### 3. 분석 및 개선
- 사용자 행동 분석
- 대화 품질 모니터링
- A/B 테스트 구현

## 📞 문의 및 지원

챗봇 관련 기술적 문의나 개선 사항이 있으시면 개발팀에 연락해 주세요.

---

**작성일**: 2024년 12월 19일  
**작성자**: AI Assistant  
**버전**: 1.0