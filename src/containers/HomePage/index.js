import React, { useEffect } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuHeader from "../../components/MenuHeader";
import "./style.css";

//images
import b2 from "../../flipkart images/banner2.jpg";
import b3 from "../../flipkart images/banner3.jpg";
import b4 from "../../flipkart images/banner4.jpg";

import p1 from "../../flipkart images/p1.jpeg";
import p2 from "../../flipkart images/p2.jpeg";
import p3 from "../../flipkart images/p3.jpeg";
import p4 from "../../flipkart images/p4.jpeg";
import p5 from "../../flipkart images/p5.jpeg";
import p6 from "../../flipkart images/p6.jpeg";
import p7 from "../../flipkart images/p7.jpeg";

import s1 from "../../flipkart images/s1.jpeg";
import s2 from "../../flipkart images/s2.jpeg";
import s3 from "../../flipkart images/s3.jpeg";
import s4 from "../../flipkart images/s4.jpeg";
import s5 from "../../flipkart images/s5.jpeg";
import s6 from "../../flipkart images/s6.jpeg";
import s7 from "../../flipkart images/s7.jpeg";

import c1 from "../../flipkart images/c1.jpeg";
import c2 from "../../flipkart images/c2.jpeg";
import c3 from "../../flipkart images/c3.jpeg";
import c4 from "../../flipkart images/c4.jpeg";
import c5 from "../../flipkart images/c5.jpg";
import c6 from "../../flipkart images/c6.jpeg";
import c7 from "../../flipkart images/c7.jpeg";

import f1 from "../../flipkart images/f1.jpeg";
import f2 from "../../flipkart images/f2.jpeg";
import f3 from "../../flipkart images/f3.jpeg";
import f4 from "../../flipkart images/f4.jpeg";
import f5 from "../../flipkart images/f5.jpeg";
import f6 from "../../flipkart images/f6.jpeg";
import f7 from "../../flipkart images/f7.jpeg";

import w1 from "../../flipkart images/w1.jpeg";
import w2 from "../../flipkart images/w2.jpeg";
import w3 from "../../flipkart images/w3.jpeg";
import w4 from "../../flipkart images/w4.jpeg";
import w6 from "../../flipkart images/w6.jpeg";
import m5 from "../../flipkart images/m5.jpeg";
import m6 from "../../flipkart images/m6.jpeg";

import payment from "../../flipkart images/payment.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug } from "../../actions/product.action";
import Card from "../../components/UI/Card";
import { MaterialButton } from "../../components/MaterialUI";
import Rating from "../../components/UI/Rating";
import Price from "../../components/UI/Price";
import { generatePublicUrl } from "../../urlConfig";
export default function HomePage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const product = useSelector((state) => state.product);
  console.log("product", product);
  const priceRange = product.priceRange;
  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, []);
  return (
    <Layout>
      {/* banner section */}
      <section>
        <div className="banner">
          <div className="slider">
            <img src={b2} alt="banner" />
            <img src={b3} alt="banner" />
            <img src={b4} alt="banner" />
            <img src={b2} alt="banner" />
          </div>
        </div>
      </section>
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

      <footer>
        <div className="footer-row">
          <div className="footer-col-1">
            <div className="footer-heading">
              <p>ABOUT</p>
            </div>
            <div className="footer-list">
              <a href="#">Contact Us</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Flipkart Stories</a>
              <a href="#">Press</a>
              <a href="#">Flipkart Wholesale</a>
            </div>
          </div>
          <div className="footer-col-2">
            <div className="footer-heading">
              <p>HELP</p>
            </div>
            <div className="footer-list">
              <a href="#">Payments</a>
              <a href="#">Shipping</a>
              <a href="#">Cancellation &amp; Returns</a>
              <a href="#">FAQ</a>
              <a href="#">Report Infringement</a>
            </div>
          </div>
          <div className="footer-col-3">
            <div className="footer-heading">
              <p>POLICY</p>
            </div>
            <div className="footer-list">
              <a href="#">Return Policy</a>
              <a href="#">Terms Of Use</a>
              <a href="#">Security</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>
              <a href="#">EPR Compliance</a>
            </div>
          </div>
          <div className="footer-col-4">
            <div className="footer-heading">
              <p>SOCIAL</p>
            </div>
            <div className="footer-list">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
          </div>
          <div className="footer-col-5">
            <div className="footer-heading">
              <p>Mail Us</p>
            </div>
            <div className="footer-list">
              <p>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia
                &amp; Clove Embassy Tech Village, Outer Ring Road,
                Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
              </p>
            </div>
          </div>
          <div className="footer-col-6">
            <div className="footer-heading">
              <p>Registered Office Address</p>
            </div>
            <div className="footer-list-address">
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &amp;</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p>CIN : U51109KA2012PTC066107</p>
              <p>
                {" "}
                Telephone:<span> 1800 202 9898</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-row2">
          <div className="footer-row2-col">
            <p>
              {" "}
              <i className="fas fa-shopping-bag" />
              Sell On Flipkart
            </p>
          </div>
          <div className="footer-row2-col">
            <p>
              <i className="fas fa-star" />
              Advertise
            </p>
          </div>
          <div className="footer-row2-col">
            <p>
              <i className="fas fa-gift" />
              Gift Cards
            </p>
          </div>
          <div className="footer-row2-col">
            <p>
              <i className="fas fa-question-circle" />
              Help Center
            </p>
          </div>
          <div className="footer-row2-col">
            <p>© 2007-2021 Flipkart.com</p>
          </div>
          <div className="footer-row2-col">
            <img src={payment} alt="payments" />
          </div>
        </div>
      </footer>
    </Layout>
  );
}
