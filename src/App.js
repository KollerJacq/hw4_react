import "./styles.css";
import Input from "./input";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/KollerJacq" target="_blank">
          Jacqueline Koller
        </a>{" "}
        and is opend-sourced on{" "}
        <a href="https://github.com/KollerJacq/hw4_react" target="_blank">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://creative-sprite-45cc80.netlify.app/" target="_blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}
