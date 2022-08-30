import React from "react";

//gif
import spinner from "../gif/spinner.gif";

//styles
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="loading" />
      <h1>Loading ... </h1>
    </div>
  );
};

export default Loader;
