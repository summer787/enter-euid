# 🦁 JS에서 9해조 - Enter EUID

## 프론트엔드 스쿨 6기 html/css/Javascript Project - 9조

## 🎈 프로젝트 목표

서로 서로 도우며 개발하며 같이의 가치를 찾아보자! 👨‍👩‍👧‍👦

웹 접근성을 고려하여 aria-label,aria-hidden 등을 활용함.

깃허브를 활용하여 develop 브랜치 만들어서 하위에 팀원들의 브랜치를 만들고 협업함

기간 : 2023년 7월 28일 ~ 2023년 8월 2일

## 🌟 배포 주소

Link: [wiki][깃허 위키 주소]

## 💻 Git Commit Message 규칙 

`키워드 : 내용(#issueNumber)`

**Commit message Type**

- **feat** : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
- **fix** : 기능에 대한 버그 수정
- **build** : 빌드 관련 수정
- **chore** : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
- **ci** : CI 관련 설정 수정
- **docs** : 문서(주석) 수정
- **style** : 코드 스타일, 포맷팅에 대한 수정
- **refactor** : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
- **test** : 테스트 코드 추가/수정
- **release** : 버전 릴리즈

## 🌟 Commit message Rule

- 제목은 명령문으로, 과거형 ❌
- 제목 끝에 마침표 ❌
- 제목 첫 글자는 대문자
- : 앞과 뒤에 띄어쓰기하기
- 최대한 팀원들이 이해하기 쉽게 🥰

## ⚒️ Skills

![Alt text](../enter-euid/client/assets/images/skillsLogo.png)

## 💻 담당 기능

| 이름                   | 맡은 페이지                                          | 맡은 파트                                            |
| ---------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| 고수완 조장 🚩         | 메인디테일 페이지, 검색 페이지                       | 데이터스키마 설계 및 디테일 페이지 구성              |
| 차지훈 스크럼마스터 🚩 | 로그인페이지, 회원가입페이지, 검색페이지, 마이페이지 | 회원가입 페이지 와 로그인페이지 및 공통레이아웃 구성 |
| 조지현                 | 메인페이지                                           | 데이터스키마 설계 및 메인 페이지 구성                |
| 이송엽                 | 시작페이지, 카테고리페이지, 검색페이지               | 스타트 페이지,검색 페이지 및 카테고리 페이지 구성    |

### 🦁 고수완

- 데이터 스키마 설계 및 구현
- 디테일 페이지 마크업 및 스타일링
- 디테일 페이지 내 유저 정보 및 유저의 매너온도 비동기 통신으로 동적으로 렌더링
- 디테일 페이지 내 아이템 리스트 비동기 통신으로 동적으로 렌더링
- 메인페이지 에서 메인디테일 페이지로 넘어갈때 넘어오는 localstroage에서 - product-id값을 기반으로 렌더링
- 메인디테일 페이지 로딩 시 spinner 기능 구현
- swiper기능 구현
  - swiper 페이지네이션 불렛 커스텀 디자인
- json-server 데이터 내의 시간 정보를 기반으로 현재 시간과 비교해 업로드 시간 구현
- 검색 페이지 내 json-server의 데이터 기반으로 해당하는 데이터 검색 기능

### 🦁 차지훈

- 공통 레이아웃 제작 (헤더 및 하단 네비게이션) 및 해당 공통 레이아웃을 javascript로 동적으로 렌더링하는 기능 구현
- 로그인 페이지 내 로그인 기능 구현
- 회원가입 페이지 내 회원가입 기능 구현
- 가입 시 해당 휴대폰 번호 localSotrage에 id로 저장하는 기능 구현
- 인증 문자 받기 기능 구현
- 인증 문자 다시받기 타이머 기능 구현
- 마이페이지 내 회원탈퇴 기능
- 하단 네비게이터에서 현재 페이지가 해당 메뉴에 있을때 아이콘 색상 활성화 기능
- 검색 페이지 내 json-server의 데이터 기반으로 해당하는 데이터 검색 기능

### 🦁 조지현

- 데이터 스키마 설계 및 구현
- 메인페이지 마크업 및 스타일링
- swiper.js를 이용한 슬라이드 구현
- json-server data 기반으로 한 아이템 리스트 비동기 통신으로 동적 렌더링
- mainpage에서 detailmainpage로 넘어갈 때 클릭한 아이템의
- product-id를 localStoarge에 저장
- 검색 페이지 내 json-server의 데이터 기반으로 해당하는 데이터 검색 기능

### 🦁 이송엽

- 시작페이지 및 카테고리 페이지, 검색 페이지 마크업 및 스타일링
- 카테고리 페이지 내에 버튼 클릭 시 클릭한 버튼의 background 및 해당 svg icon 동적으로 변경되도록 구현
- 해당 버튼을 눌렀을때 해당 아이템에 대한 정보가 localstorage로 저장되도록 구현
- 페이지 이동 기능 구현
- 검색 페이지 내 json-server의 데이터 기반으로 해당하는 데이터 검색 기능

## 🌟 Project 구현

### 1. 시작 페이지

![enter-euid-team9_시작하기_-_Chrome_2023-08-02_09-53-38_AdobeExpress (1)](https://github.com/like-lion-javascript-project-9/enter-euid/assets/90172574/52abd686-c37e-40bf-b130-4e27acb9f273)

### 2. 카테고리 페이지

![ezgif com-video-to-gif](https://github.com/like-lion-javascript-project-9/enter-euid/assets/90172574/10ddf495-6828-47b4-9fbc-22929a749d01)

### 메인

![main](https://github.com/like-lion-javascript-project-9/enter-euid/assets/122072365/853e643b-d22d-4cbb-801b-40179f6a430d)

### 메인디테일 페이지

![maindetail](https://github.com/like-lion-javascript-project-9/enter-euid/assets/122072365/5cdf4f2a-b47e-4344-ac3e-b20b25622b34)

# JavaScript Project Scaffolding

_자바스크립트 프로젝트 환경 구성 스케폴딩_

> **Note**: 해당 문서는 자바스크립트 프로젝트에 필요한 기본적인 환경 구성을 위한 [스케폴딩](https://www.wisewiredbooks.com/term-dict/common/scaffolding.html) 자료입니다.

---

패키지 설치 항목

- [live-server](https://www.npmjs.com/package/live-server)
- [json-server](https://www.npmjs.com/package/json-server)
- [prettier](https://www.npmjs.com/package/prettier)
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)

---

## live-server

```
로컬 환경을 실제 서버처럼 작동시켜 웹 개발을 도와주는 패키지로서 사용자가 직접 호스트,포트번호 를 바꿔서 클라이언트 서버를 구동시키고자 할때 사용됩니다.

```

---

## json-server

```
로컬 데이터 서버를 위한 패키지 모듈로서 DB와 API서버를 생성해주는 패키지 입니다.
백엔드 개발에서 실제 DB와 API Server가 구축될 때까지 프론트엔드 개발에 임시적으로 사용할 mock data를 생성하기 위해 사용됩니다.

```

---

## prettier

```
협업을 위해 formatter 기능을 활용해 코드의 통일성을 유지시켜주는 패키지 입니다.
ESLint가 코드의 퀄리티를 일관적으로 유지시켜준다면, Prettier는 일관적인 코드 스타일을 유지할 수 있게 도와줍니다.

```

---

## prettier

```
협업을 위해 formatter 기능을 활용해 코드의 통일성을 유지시켜주는 패키지 입니다.
ESLint가 코드의 퀄리티를 일관적으로 유지시켜준다면, Prettier는 일관적인 코드 스타일을 유지할 수 있게 도와줍니다.

```

---

## prettier-plugin-tailwindcss

```
tailwind가 가지고 있는 Automatic class sorting 기능을 prettier의 기능을 활용해 자동 포멧이 일어날 수 있도록 도와주는 플러그인 패키지 입니다.

```

[Automatic class sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

---

## tailwindcss

```
utility-first를 지향하는 CSS의 프레임워크으로 미리 세팅된 유틸리티 클래스를 활용하여 HTML 코드 내에서 스타일링을 가능하게 하는 style 패키지 입니다.
tailwind가 제공하는 유틸리티 클래스들을 다양하게 조합하면 추가적인 CSS코드 작성 없이 스타일링이 가능합니다.

```

[Tailwind](https://tailwindcss.com/)

---

## postcss-import

```
자바스크립트 기반의 플러그인을 사용하여 css 기능을 자동화 시키는 도구로 postcss가 가지고 있는 플러그인 환경을 사용해 css를 사용할 수 있습니다.
css의 import 기능과 tailwind의 css 병합을 위해 사용됩니다.

```

[postcss](https://postcss.org/)

---

## START

> **Note**: 해당 프리셋은 node_modules를 내장하고 있지 않습니다. 다운받아 그대로 사용할 경우 `npm install` 을 하신 후 사용해 주세요.

<br/>

### 백엔드 서버 실행

```bash
npm run serve:backend
```

<br/>

### 프론트 서버 실행

```bash
npm run serve:frontend
```

<br/>

### tailwind 실행

```bash
npm run tailwind
```

<br/>

### 동시 실행

```bash
npm run start
```

**[⬆ back to top](#JavaScript-Project-Scaffolding)**
