import "./App.css";
import { About, Navbar, Projects } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
