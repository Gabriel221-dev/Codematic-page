import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route>
          <Home />
        </Route>
      </main>
    </Router>
  );
}

export default App;
