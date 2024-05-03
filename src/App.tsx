import { useState } from "react";
import kachniarzLogo from "./assets/kachniarz.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={kachniarzLogo} className="logo" alt="Kachniarz logo" />
      </div>
      <h1>Maciej Kachniarz</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Sup?</p>
      </div>
    </>
  );
}

export default App;
