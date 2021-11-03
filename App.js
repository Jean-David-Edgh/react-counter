import "./App.css";
import { useState } from "react";
import ButtonAdd from "./components/ButtonAdd";
import ButtonSub from "./components/ButtonSub";
import ResetButton from "./components/ResetButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <Header />
      <div className="body">
        <ButtonSub counter={counter} setCounter={setCounter} />
        <span className="counter">{counter}</span>
        <ButtonAdd counter={counter} setCounter={setCounter} />
        <ResetButton counter={counter} setCounter={setCounter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
