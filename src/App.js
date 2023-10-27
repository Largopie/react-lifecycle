import { useState } from 'react';

function App() {
  const [randomColor, setRandomColor] = useState('');
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>토글</button>
      {visible ? <div>
        <button onClick={() => setRandomColor(getRandomColor())}>랜덤 색상</button>
        <button onClick={() => setCount(count + 1)}>더하기</button>
        <h1 style={{ color: randomColor }}>{count}</h1>
        <p>color : {randomColor}</p>
      </div> : null}
    </div>
  );
}

export default App;
