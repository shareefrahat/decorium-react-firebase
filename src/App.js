import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Home from "./routes/Home/Home";
import NotFound from "./routes/NotFound/NotFound";
import Orders from "./routes/Orders/Orders";
import Shop from "./routes/Shop/Shop";
import useCart from "./hooks/useCart";
import User from "./routes/User/User";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  const [cart, setCart] = useCart([]);

  const addToCart = (selectedProduct) => {
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      setCart([...cart, selectedProduct]);
    } else {
      alert("already added to cart");
      setCart(cart);
    }
  };
  return (
    <div className="App">
      <Header cart={cart}></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart}></Shop>}
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders cart={cart}></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
