// import React from "react";
import { useState, useEffect } from "react";
const Counter = () => {
  // const [tenState, tenHamThayDoi] = useState(giatrimacdinh) ==> trả về 1 mảng
  //   setState là hàm bất đồng bộ

  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    setCount((prevCount) => {
      // Nhận vào là một callback
      //   console.log(prevCount);
      return prevCount - 1; //Cách này được sử dụng nhiều hơn vì lấy dược giá trị cũ của state
    });
  };
  //   console.log(count);
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting");
    };
  }, []);
  useEffect(() => {
    console.log(`Count Update`, count);
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {count === 10 && <p>Thành công</p>}
    </div>
  );
};

export default Counter;
