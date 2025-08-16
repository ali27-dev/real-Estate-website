import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";
import Companies from "./components/Companies/Companies.jsx";
import Residences from "./components/Residences/Residences.jsx";
import Value from "./components/Values/Value.jsx";
import Contact from "./components/Contact/Contact.jsx";
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
      <Contact />
    </div>
  );
}

export default App;
