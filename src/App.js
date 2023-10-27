import { useState } from 'react';
import LifeCycleSample from './LifeCycleSample';

function App() {
  const [color, setColor] = useState('#000000');
  const [visible, setVisible] = useState(true);

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      <button onClick={() => setColor(getRandomColor())}>랜덤 색상</button>
      <button onClick={() => setVisible(!visible)}>토글</button>
      {visible && <LifeCycleSample color={color} />}
    </div>
  );
}

export default App;
