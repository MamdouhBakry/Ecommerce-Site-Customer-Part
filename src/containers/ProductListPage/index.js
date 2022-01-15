import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ClothingAndAccessories from "./ClothingAndAccessories";
import ProductPage from "./productPage";
import ProductStore from "./productStore";
import "./style.css";

export default function ProductListPage(props) {
  const search = useLocation().search;
  //const name = new URLSearchParams(search).get("name");
  const renderProduct = () => {
    const params = getParams(search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = <ClothingAndAccessories {...props} />;
    }
    return content;
  };
  return <Layout>{renderProduct()}</Layout>;
}
