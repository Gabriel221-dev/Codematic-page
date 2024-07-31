import "./App.css";
import Home from "./pages/home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <section>
        <div> Hello </div>
        <Home />
      </section>
    </Router>
  );
}

export default App;
