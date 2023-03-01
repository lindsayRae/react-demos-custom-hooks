import { useRef, useState, useEffect } from 'react';
import useConsoleLog from './useConsoleLog';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  ///////////////////////////////////////////////////

  const [day, setDay] = useState('Monday');
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === 'Monday') {
      setDay('Tuesday');
    } else if (day === 'Tuesday') {
      setDay('Wednesday');
    } else if (day === 'Wednesday') {
      setDay('Thursday');
    } else if (day === 'Thursday') {
      setDay('Friday');
    } else if (day === 'Friday') {
      setDay('Monday');
    }
  };
  return (
    <div className='App'>
      <div>
        <h1>Custom Hooks</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Plus 1</button>
      </div>
      <div style={{ padding: '10px' }}>
        <h1>Custom Hooks Assignment:</h1>
        <div>
          <h2>
            Today is: {day}
            <br />
            {prevDay && <span>Previous work day was: {prevDay}</span>}
          </h2>
          <button onClick={getNextDay}>Get next day</button>
        </div>
      </div>
    </div>
  );
}

function usePrevious(val) {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}

export default App;
