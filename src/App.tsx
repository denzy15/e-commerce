import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Type from "./components/Type/Type";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import Main from "./components/Main/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/type" element={<Type />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
