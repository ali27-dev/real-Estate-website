import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";
import Companies from "./components/Companies/Companies.jsx";
import Residences from "./components/Residences/Residences.jsx";
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
    </div>
  );
}

export default App;
