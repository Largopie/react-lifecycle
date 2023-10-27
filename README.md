# React LifeCycle

[참고자료 : 벨로퍼트와 함께하는 모던 리액트 - 25. LifeCycle Method](https://react.vlpt.us/basic/25-lifecycle.html)

## 프로젝트 실행 방법
```shell
$ npm install && npm start
```

## 프로젝트의 3가지 버튼
  1. 랜덤 색상 : 숫자의 색상이 랜덤하게 바뀝니다.
  2. 토글 : 컴포넌트가 사라지거나 나타납니다.
  3. 더하기 : 숫자가 1씩 더해집니다.

❗️ 컴포넌트 : 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈

<img src="https://github.com/Largopie/react-lifecycle/assets/106071687/475dfd6a-21e1-43f5-9a58-b4a6b42b3e17" width="800" height="400">

[출처 : http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]

- 컴포넌트는 생성(mounting) -> 업데이트(updating) -> 제거(unmounting)의 생명주기를 갖습니다.
- 리액트 클래스 컴포넌트는 라이프 사이클 메서드를 사용하며, 함수형 컴포넌트는 Hook을 사용합니다.

## 마운트
    마운트 할 때 발생되는 생명주기
- constructor
- getDerivedStateFromProps
- render
- componentDidMount
