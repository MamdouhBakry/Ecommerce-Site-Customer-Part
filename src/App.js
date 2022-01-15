import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions/auth.action";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import { updateCart } from "./actions/cart.action";
import CheckoutPage from "./containers/CheckoutPage";
import OrderPage from "./containers/OrderPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/checkout" exact element={<CheckoutPage />} />
          <Route path="/account/orders" exact element={<OrderPage />} />
          <Route
            path="/order_details/:orderId"
            exact
            element={<OrderDetailsPage />}
          />
          <Route
            path="/:productSlug/:productId/p"
            exact
            element={<ProductDetailsPage />}
          />
          <Route path="/:slug" exact element={<ProductListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
