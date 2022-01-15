import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug } from "../../../actions/product.action";
import { generatePublicUrl } from "../../../urlConfig";
import { MaterialButton } from "../../../components/MaterialUI/index";
import Card from "../../../components/UI/Card";
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";
import "./style.css";

export default function ProductStore() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const product = useSelector((state) => state.product);
  console.log("product", product);
  const priceRange = product.priceRange;
  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, []);
  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${slug} mobile under ${priceRange[key]}`}
            headerRight={
              <MaterialButton
                title={"VIEW ALL"}
                style={{
                  width: "96px",
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => {
                return (
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/${product.slug}/${product._id}/p`}
                    key={product._id}
                    className="productContainer"
                  >
                    <div className="productImgContainer">
                      <img
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt=""
                      />
                    </div>
                    <div className="productInfo">
                      <div style={{ margin: "5px 0" }}>{product.name}</div>
                      <div>
                        <Rating value="4.3" /> <span>3353</span>
                      </div>
                      <Price value={product.price} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Card>
        );
      })}
    </>
  );
}
