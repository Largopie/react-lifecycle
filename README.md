# React LifeCycle

[참고자료 : 벨로퍼트와 함께하는 모던 리액트 - 25. LifeCycle Method](https://react.vlpt.us/basic/25-lifecycle.html)

> ## 목차
> 1. [프로젝트 실행 방법](#프로젝트-실행-방법)
> 2. [마운트](#마운트)
> 3. [업데이트](#업데이트)
> 4. [언마운트](#언마운트)

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

> LifeCycleSample을 예로 설명하겠습니다.

<br /><br />

## 마운트
    마운트 할 때 발생되는 생명주기
- `constructor`
- `getDerivedStateFromProps`
- `render`
- `componentDidMount`

### constructor
- 컴포넌트의 생성자 메서드입니다.
- 컴포넌트가 만들어지면 가장 먼저 실행되는 메서드입니다.

### getDerivedStateFromProps
- `props`로 받아온 것을 `state`에 넣어주고 싶을 때 사용합니다.
- 다른 생명주기 메서드와 다르게 앞에 `static`을 필요로 하고, 이 안에서는 `this`를 조회할 수 없습니다.
- 특정 객체를 반환하게 되면 해당 객체 안의 내용들이 컴포넌트의 `state`로 설정이 되는 반면, `null`을 반환하게 되면 아무 일도 발생하지 않습니다.

### render
- 컴포넌트를 렌더링하는 메서드 입니다.

### componentDidMount
- 컴포넌트의 첫번째 렌더링이 끝나면 호출되는 메서드입니다.
- 만든 컴포넌트가 화면에 나타난 상태가 호출되는 시점입니다.
- `D3`, `masonry`처럼 DOM을 사용해야하는 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 `axios`, `fetch` 등을 사용하여 `ajax`요청을 하거나, DOM의 속성을 읽거나 직접 변경하는 작업을 진행합니다.

❗️ `D3.js`: Data-Driven-Documents의 약자로, 웹 브라우저상에서 동적이고 인터렉티브한 정보시각화를 구현하기 위한 자바스크립트 라이브러리

❗️ `masonry` : 사전적 의미로는 `벽돌을 쌓는다`라는 의미로, 레이아웃을 사용하는 축의 방향으로는 요소를 빈틈 없이 차곡차곡 쌓는 형태의 UI를 가리킵니다.<br />
ex) masonry 레이아웃 예시 : [[Pinterest]](https://www.pinterest.co.kr/), [[NAVER 이미지]](https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EC%9D%B4%EB%AF%B8%EC%A7%80)

<br /><br />

## 업데이트
    컴포넌트가 업데이트 되는 시점에 호출되는 메서드
- `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `getSnapshotBeforeUpdate`
- `componentDidUpdate`

### getDerivedStateFromProps
- 컴포넌트의 props나 state가 바뀌었을때도 이 메서드가 호출됩니다.

### shouldComponentUpdate
- 컴포넌트의 리렌더링 여부를 결정하는 메서드입니다.
- 주로 최적화에 사용하는 메서드입니다.

### render
- 컴포넌트를 렌더링하는 메서드 입니다.

### getSnapshotBeforeUpdate
- 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면 그 다음 발생하게 되는 `componentDidUpdate` 함수를 받아와서 사용할 수 있습니다.

### componentDidUpdate
- 리렌더링을 마치고, 화면에 우리가 원하는 변화가 모두 반영된 후 호출되는 메서드입니다.
- 3번째 파라미터로 `getSnapshotBeforeUpdate`에서 반환한 값을 조회할 수 있습니다.
- 실제 사용 사례 : 새로운 내용이 추가되었을 때 사용자의 스크롤 위치를 유지시키는 기능

<br /><br />

## 언마운트
    컴포넌트가 화면에서 사라질 때 호출되는 메서드
- `componentWillUnmount`

### componentWillUnmount
- 컴포넌트가 화면에서 사라지기 직전에 호출됩니다.
- 주로 DOM에 직접 등록했었던 이벤트를 제거하고, 만약에 `setTimeout`을 사용하는 부분이 있다면 `clearTimeout`을 통해 제거합니다.