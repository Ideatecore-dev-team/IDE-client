import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import useCounterVisitor from "./hooks/useCounterVisitor";
import { ToastContainer } from "react-toastify"; // Impor ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Impor CSS untuk styling toast

function App() {
  useCounterVisitor();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right" // Posisi toast (opsional: top-right, top-center, dll.)
        autoClose={5000} // Durasi toast muncul (dalam ms, misalnya 5 detik)
        hideProgressBar={false} // Tampilkan atau sembunyikan progress bar
        newestOnTop={false} // Urutan toast (terbaru di atas atau bawah)
        closeOnClick // Tutup toast saat diklik
        pauseOnHover // Jeda saat hover
        draggable // Bisa digeser
        theme="light" // Tema (light, dark, atau colored)
      />
    </>
  );
}

export default App;
