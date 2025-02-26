import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import useCounterVisitor from "./hooks/useCounterVisitor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useCounterVisitor();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
