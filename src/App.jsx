import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";
import Companies from "./components/Companies/Companies.jsx";
import Residences from "./components/Residences/Residences.jsx";
import Value from "./components/Values/Value.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residences />
      <Value />
    </div>
  );
}

export default App;
