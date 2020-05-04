import React from "react";
import styles from "./logo.module.css";
import logoImg from "./image.png";

const logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img className={styles.logo2} src={logoImg} alt="logo" />
      </a>
    </div>
  );
};

export default logo;
