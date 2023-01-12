import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";
import BodyComponent from "./Components/Body";
import {FooterComponent} from './Components/Footer';
import "../index.css";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
