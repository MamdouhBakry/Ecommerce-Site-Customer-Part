import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions/product.action";
import { useLocation } from "react-router-dom";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import Card from "../../../components/UI/Card";

export default function ProductPage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  const params = getParams(useLocation().search);
  useEffect(() => {
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);
  return (
    <div className="caresulePart">
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => {
            return (
              <a
                key={index}
                href={banner.navigateTo}
                styles={{ display: "block" }}
              >
                <img src={banner.img} alt="" />
              </a>
            );
          })}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}
      >
        {page.products &&
          page.products.map((product, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: "400px",
                  height: "200px",
                  margin: "5px 5px",
                }}
              >
                <img
                  style={{
                    height: "70%",
                    width: "80%",
                    margin: "auto",
                    objectFit: "contain",
                  }}
                  src={product.img}
                  alt=""
                />
              </Card>
            );
          })}
      </div>
    </div>
  );
}
