import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions/auth.action";
import ProductDetailsPage from "./containers/ProductDetailsPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
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
