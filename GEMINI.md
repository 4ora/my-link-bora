# My Link Bora (my-profile)

이 프로젝트는 `my-profile` 디렉토리에 위치한 Next.js 기반의 프로필 웹 애플리케이션입니다.

## 🚀 프로젝트 개요
- **기술 스택**: Next.js (App Router), TypeScript, Tailwind CSS (v4), Geist Fonts
- **주요 구조**: `my-profile/app` 디렉토리를 중심으로 한 현대적인 웹 아키텍처를 따릅니다.

## 🛠 빌드 및 실행 방법
모든 명령어는 `my-profile` 디렉토리 내에서 실행해야 합니다.

- **개발 서버 실행**:
  ```bash
  npm run dev
  ```
  [http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

- **프로덕션 빌드**:
  ```bash
  npm run build
  ```

- **앱 시작 (빌드 후)**:
  ```bash
  npm run start
  ```

- **린트 체크**:
  ```bash
  npm run lint
  ```

## 📝 개발 컨벤션 및 주의사항
- **Next.js 버전 주의**: 이 프로젝트에서 사용하는 Next.js는 표준 버전과 다른 API나 컨벤션을 가질 수 있습니다. 자세한 내용은 `my-profile/node_modules/next/dist/docs/`의 문서를 참고하세요.
- **스타일링**: Tailwind CSS v4를 사용하며, `@import "tailwindcss"` 방식을 채택하고 있습니다.
- **언어**: 계획, 테스크, Walkthrough 및 대답은 항상 **한국어**로 작성합니다.
- **검증**: 개발 작업이 완료된 후에는 항상 빌드 명령어를 통해 정상 동작 여부를 검증합니다.
- **커밋**: 커밋 메시지는 상세하게 한글로 작성합니다.

## 📂 주요 파일 및 디렉토리
- `my-profile/app/`: 애플리케이션의 라우트와 레이아웃 정의
- `my-profile/public/`: 정적 자산 (이미지, 로고 등)
- `my-profile/AGENTS.md`: AI 에이전트를 위한 특수 규칙 및 안내 사항
- `my-profile/next.config.ts`: Next.js 설정 파일
