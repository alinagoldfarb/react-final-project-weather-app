import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alina Goldfarb    
          </a>{" "}
          and is{" "}
          <a 
          href="https://github.com/alinagoldfarb/react-final-project-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        > 
          open-sourced on GitHub
        </a>{" "}
        and hosted on Netlify{" "}
        <a 
          href="https://eloquent-entremet-9314bd.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>{" "}
          </footer>
          
      </div>
    </div>
  );
}
