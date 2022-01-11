import React from "react";
import Header from "../Header";
import MenuHeader from "../MenuHeader";

export default function Layout(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <MenuHeader />
      {props.children}
    </div>
  );
}
