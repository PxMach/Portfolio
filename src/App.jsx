import "./App.css";
import About from "./Components/About me/About.jsx";
import Header from "./Components/Header/Header.jsx";
import Skills from "./Components/Skills/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
