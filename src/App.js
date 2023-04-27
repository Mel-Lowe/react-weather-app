import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://playful-lebkuchen-8def1d.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Mel Lowe
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mel-Lowe/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
