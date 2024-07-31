import "./App.css";
import Home from "./pages/home";
import Header from "./components/Header";
import footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>
      <div> Hello </div>
      <Home />
    </section>
  );
}

export default App;
