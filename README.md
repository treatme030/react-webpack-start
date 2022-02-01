## webpack으로 React 시작해보기
### 1. React를 시작할 폴더에서 npm 초기화
  ```javascript
  npm init -y
  ```
### 2. 필요한 라이브러리 설치
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
### 3. package.json의 scripts 추가 설정 
  ```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --progress --mode production"
  },
  ```
  * webpack-dev-server --mode development --open: webpack의 개발 서버를 development 모드로 실행
  * webpack --progress --mode production: webpack을 production 모드로 실행시켜 번들링, progress은 빌드 진행 과정을 모니터링하기 위한 옵션
### 4. webpack 설정
 - 스타일과 이미지를 적용하기 위해 추가적인 plugin과 loader 설치하고, 설정
  * webpack.config.js 파일 생성
  ```javascript
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      main: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, './dist/'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.jpeg$/,
          use: ['file-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'common.css',
      }),
      new CleanWebpackPlugin(),
    ]
  }
  ```
  * mini-css-extract-plugin: CSS가 포함된 JS 파일별로 CSS 파일을 생성 
  * css-loader: css 읽기
  * file-loader: 이미지와 같은 file 읽기
  * clean-webpack-plugin: 빌드된 파일 중 사용하지 않는 파일 제거
### 5. babel 설정
  * .babelrc 파일 생성
  ```javascript
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "browsers": ["last 2 versions", ">= 5% in KR"] //브라우저의 상위 버전 두개(예: IE 11, 10)와 한국(KR)에서 5% 이상의 점유율을 가지고 있는 브라우저에 대응하여 컴파일되도록 설정
          }
        }
      ],
      "@babel/react" //React 컴파일
    ]
  }
  ```
### 6. HTML파일 만들기
  ```javascript
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Webpack</title>
  </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  ```
### 7. React 만들기
  * index.js와 App.js 파일 생성
  * css 파일도 생성해서 적용
  ```javascript
  //index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import './index.css';

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  ```
  ```javascript
  //App.js
  import React from 'react';
  import simson from './images/default.jpeg';

  const App = () => {
    return (
      <div>
        <h1>Hello Simson!</h1>
        <img src={simson} alt="simson" />
      </div>
    );
  };

  export default App;
  ```
### 8. 실행하기
  ```javascript
  npm start
  ```
### 9. 빌드하기
  ```javascript
  npm run build //커스텀 명령어는 run을 추가해서 실행 
  ```
  * dist 폴더 생성됨
  * 전체 폴더 구성
  
  ![Screenshot from 2022-02-01 12-48-35](https://user-images.githubusercontent.com/74355328/151910170-534a572c-bab5-4030-aecc-0c75878c40e7.png)
  
