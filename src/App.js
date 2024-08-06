import { Route, Routes, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Shopcart from "./components/Shopcart";
import Store from "./components/Store";
import ProductDetails from  "./components/shared/ProductDetails"
import styles from './styles/App.module.css'

//context
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<Shopcart />} />
            <Route exact path="/" element={<Navigate to={"/login"} />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
