import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug } from "../../../actions/product.action";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";

export default function ProductStore() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
  });
  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, []);
  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div key={index} className="card">
            <div className="cardHeader">
              <div>
                {slug} mobile under {priceRange[key]}
              </div>
              <button>View All</button>
            </div>
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => {
                return (
                  <Link
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
                        <span>4.3 </span>
                        <span>3353</span>
                      </div>
                      <div className="productPrice">{product.price}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}