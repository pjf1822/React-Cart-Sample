import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import "./pages/homepage/Homepage.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
