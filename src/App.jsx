import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import useCounterVisitor from "./hooks/useCounterVisitor";

function App() {
  useCounterVisitor();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
