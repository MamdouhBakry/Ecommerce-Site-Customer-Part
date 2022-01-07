import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card/index";
import CartItem from "./CartItem";
import { addToCart, getCartItems } from "../../actions/cart.action";
import "./style.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);
  const onQuantityIncrement = (_id, qty) => {
    //console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };
  const onQuantityDecrement = (_id, qty) => {
    //console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };
  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card
          style={{ width: "68%" }}
          headerLeft={"My Cart"}
          headerRight={<div>Deliver To</div>}
        >
          {Object.keys(cartItems).map((key, index) => {
            return (
              <CartItem
                key={index}
                cartItems={cartItems[key]}
                onQuantityInc={onQuantityIncrement}
                onQuantityDec={onQuantityDecrement}
              />
            );
          })}
        </Card>
        <Card headerLeft={"Price"} style={{ width: "28%" }}></Card>
      </div>
    </Layout>
  );
}
