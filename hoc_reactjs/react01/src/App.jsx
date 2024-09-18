import Counter from "./components/Counter";
import { useState } from "react";
const App = () => {
  const [isShow, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!isShow)}>Toogle</button>
      {isShow && <Counter />}
    </div>
  );
};

export default App;
