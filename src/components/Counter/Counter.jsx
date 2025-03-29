import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  //1. Хуки мають викликатись лише в функціональному компоненті
  //2. Хуки не можна викликати по умові
  //3. Хуки не можна викликати в циклах
  //4. Не можна хуки викликати за межами компонента
  const [counter, setCounter] = useState(0);
  const [step, setstep] = useState(10);

  const handlePlusClick = e => {
    // console.log(counter);

    setCounter(counter + 1);
    console.log(counter);
  };
  const handleMinusClick = e => {
    setCounter(counter - 1);
    // console.log(counter);
  };
  const handleResetClick = () => {
    setCounter(0);
    setstep(1);
  };

  const sayHello = name => {
    console.log(`Hello , ${name}`);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={e => setstep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className="btn">
            minus
          </button>
          <button onClick={handleResetClick} className="btn">
            reset
          </button>
          <button onClick={handlePlusClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
