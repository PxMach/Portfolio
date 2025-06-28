import "./App.css";
import About from "./Components/About me/About.jsx";
import Header from "./Components/Header/Header.jsx";
import Projects from "./Components/Projects/Porjects.jsx";
import Skills from "./Components/Skills/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
