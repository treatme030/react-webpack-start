## webpack으로 React 시작해보기
  1. React를 시작할 폴더에서 npm 초기화
  ```javascript
  npm init -y
  ```
  2. 필요한 라이브러리 설치
  ```javascript
  npm i --save react react-dom
  npm i -D webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react
  ```
  * react, react-dom: React 개발에 필요한 필수 항목
  * webpack: webpack 라이브러리
  * webpack-cli: webpack을 명령어로 조작하기 위한 라이브러리
  * html-webpack-plugin: webpack에서 HTML을 다루기 위한 플러그인
  * webpack-dev-server: webpack으로 로컬에서 개발하기 위한 테스트 서버
  * babel-loader: webpack에서 babel을 다루기 위한 라이브러리
  * @babel/core: babel로 컴파일
  * @babel/preset-env: babel로 컴파일시 어떤 타겟으로 지정할지 설정하는 라이브러리
  * @babel/preset-react: React를 babel로 컴파일하기 위한 라이브러리
  3. package.json의 scripts 추가 설정 
  ```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --mode development",
    "build": "webpack --progress --mode production"
  },
  ```
  * webpack-dev-server --mode development --open: webpack의 개발 서버를 development 모드로 실행
  * webpack --progress --mode production: webpack을 production 모드로 실행시켜 번들링, progress은 빌드 진행 과정을 모니터링하기 위한 옵션
  
    
