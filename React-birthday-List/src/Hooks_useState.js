import React, { useState } from "react";
// React Hooks

const UseStateExample = () => {
  const [value, setValue] = useState(0);
  // Or! you can use multiple state variables and state functions to manage them.. :))
  // const [name, setName] = useState('Peter Pan');
  // const [id, setID] = useState('7');
  // const [message, setMessage] = useState('I am time');

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h1>Counter</h1>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h1>Complex Counter</h1>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateExample;
