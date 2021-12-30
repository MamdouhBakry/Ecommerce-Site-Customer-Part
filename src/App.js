import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./containers/ProductListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/:slug" exact element={<ProductListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
