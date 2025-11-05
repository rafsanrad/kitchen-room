
import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <header className="py-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
    </div>
  );
}

export default App;
