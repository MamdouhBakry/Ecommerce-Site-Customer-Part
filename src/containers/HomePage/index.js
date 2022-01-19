import React from "react";
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
export default function HomePage() {
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
      {/* Mobile section */}
      <section>
        <div className="card">
          <div className="common-heading">
            <div className="common-heading-left">
              <h1>Best Battery Phones</h1>
              <h2>More than 4000mAh</h2>
            </div>
            <div className="common-heading-right">
              <button>view all</button>
            </div>
          </div>
          <div className="common-row">
            <div className="common-col">
              <img src={p1} alt="mobile" />
              <h3>Poco m2 pro</h3>
              <h4>5000mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                13999
              </h6>
            </div>
            <div className="common-col">
              <img src={p2} alt="mobile" />
              <h3>techo spark</h3>
              <h4>4500mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                14999
              </h6>
            </div>
            <div className="common-col">
              <img src={p3} alt="mobile" />
              <h3>vivio</h3>
              <h4>5000mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                15999
              </h6>
            </div>
            <div className="common-col">
              <img src={p4} alt="mobile" />
              <h3>samsung</h3>
              <h4>5500mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                23999
              </h6>
            </div>
            <div className="common-col">
              <img src={p5} alt="mobile" />
              <h3>realme</h3>
              <h4>5000mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                13999
              </h6>
            </div>
            <div className="common-col">
              <img src={p6} alt="mobile" />
              <h3>oppo pro</h3>
              <h4>5200mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                18999
              </h6>
            </div>
            <div className="common-col">
              <img src={p7} alt="mobile" />
              <h3>samsung</h3>
              <h4>5000mAh Bttery</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                11999
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* headphones and speaker section */}
      <section>
        <div className="card">
          <div className="common-heading">
            <div className="common-heading-left">
              <h1>Top Deals on Electronics</h1>
              <h2>Up to 70% OFF</h2>
            </div>
            <div className="common-heading-right">
              <button>view all</button>
            </div>
          </div>
          <div className="common-row">
            <div className="common-col col-headphones">
              <img src={s1} alt="mobile" />
              <h3> Bluetooth Headphones</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                399
              </h6>
            </div>
            <div className="common-col col-headphones">
              <img src={s2} alt="mobile" />
              <h3>techo speaker</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                499
              </h6>
            </div>
            <div className="common-col col-headphones">
              <img src={s3} alt="mobile" />
              <h3>true wireless</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                159
              </h6>
            </div>
            <div className="common-col col-headphones">
              <img src={s4} alt="mobile" />
              <h3>wired hearphones</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                239
              </h6>
            </div>
            <div className="common-col col-headphones">
              <img src={s5} alt="mobile" />
              <h3>speaker</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                139
              </h6>
            </div>
            <div className="common-col col-headphones">
              <img src={s6} alt="mobile" />
              <h3>Bluetooth Headphones</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                1899
              </h6>
            </div>
            <div className="common-col col-headphones">
              <img src={s7} alt="mobile" />
              <h3>Bluetooth Headphones</h3>
              <h4>new lancher</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                999
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* mens clothing */}
      <section>
        <div className="card">
          <div className="common-heading">
            <div className="common-heading-left">
              <h1>Top Picks On Men's Clothing </h1>
              <h2>Up to 50% OFF</h2>
            </div>
            <div className="common-heading-right">
              <button>view all</button>
            </div>
          </div>
          <div className="common-row">
            <div className="common-col col-men">
              <img src={c1} alt="mobile" />
              <h3> t-shirt</h3>
              <h4> up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                399
              </h6>
            </div>
            <div className="common-col col-men">
              <img src={c2} alt="mobile" />
              <h3> t-shirt black</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                499
              </h6>
            </div>
            <div className="common-col col-men">
              <img src={c3} alt="mobile" />
              <h3>cap</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                159
              </h6>
            </div>
            <div className="common-col col-men">
              <img src={c4} alt="mobile" />
              <h3> cool cap</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                239
              </h6>
            </div>
            <div className="common-col col-men">
              <img src={c5} alt="mobile" />
              <h3>jeans</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                139
              </h6>
            </div>
            <div className="common-col col-men">
              <img src={c6} alt="mobile" />
              <h3>shirt</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                1899
              </h6>
            </div>
            <div className="common-col col-men">
              <img src={c7} alt="mobile" />
              <h3>short</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                999
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* Furniture Bestsellers section */}
      <section>
        <div className="card">
          <div className="common-heading">
            <div className="common-heading-left">
              <h1>Furniture Bestsellers section </h1>
              <h2>Up to 15% OFF</h2>
            </div>
            <div className="common-heading-right">
              <button>view all</button>
            </div>
          </div>
          <div className="common-row">
            <div className="common-col col-furniture">
              <img src={f1} alt="mobile" />
              <h3> swing chair</h3>
              <h4> up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                33399
              </h6>
            </div>
            <div className="common-col col-furniture">
              <img src={f2} alt="mobile" />
              <h3>bean bag cover</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                24499
              </h6>
            </div>
            <div className="common-col col-furniture">
              <img src={f3} alt="mobile" />
              <h3>furniture</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                21159
              </h6>
            </div>
            <div className="common-col col-furniture">
              <img src={f4} alt="mobile" />
              <h3> soffaa</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                17239
              </h6>
            </div>
            <div className="common-col col-furniture">
              <img src={f5} alt="mobile" />
              <h3>chair</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                5139
              </h6>
            </div>
            <div className="common-col col-furniture">
              <img src={f6} alt="mobile" />
              <h3>mirror table</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                14899
              </h6>
            </div>
            <div className="common-col col-furniture">
              <img src={f7} alt="mobile" />
              <h3>swing chair</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                1999
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* trending offers section */}
      <section>
        <div className="card">
          <div className="common-heading">
            <div className="common-heading-left">
              <h1>trending offers</h1>
              <h2>Up to 25% OFF</h2>
            </div>
            <div className="common-heading-right">
              <button>view all</button>
            </div>
          </div>
          <div className="common-row">
            <div className="common-col col-tranding">
              <img src={w1} alt="mobile" />
              <h3> cotton shirt</h3>
              <h4> up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                399
              </h6>
            </div>
            <div className="common-col col-tranding">
              <img src={w2} alt="mobile" />
              <h3>fast-trsct watch</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                499
              </h6>
            </div>
            <div className="common-col col-tranding">
              <img src={w3} alt="mobile" />
              <h3> saree</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                159
              </h6>
            </div>
            <div className="common-col col-tranding">
              <img src={w4} alt="mobile" />
              <h3> silver watch</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                239
              </h6>
            </div>
            <div className="common-col col-tranding">
              <img src={m5} alt="mobile" />
              <h3>watch</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                539
              </h6>
            </div>
            <div className="common-col col-tranding">
              <img src={w6} alt="mobile" />
              <h3>dress</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                899
              </h6>
            </div>
            <div className="common-col col-tranding">
              <img src={m6} alt="mobile" />
              <h3>black watch</h3>
              <h4>up to 20% off</h4>
              <h6>
                Now
                <i className="fas fa-rupee-sign" />
                999
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
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
