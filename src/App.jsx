import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
