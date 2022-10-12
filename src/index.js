import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating size="large" n={4} color="#C0C0C0" />
    <br />
    <br />
    <StarRating size="large" n={10} />
    <br />
    <br />
    <StarRating size="large" n={7}  color="#FF0000"/>
  </React.StrictMode>
);
