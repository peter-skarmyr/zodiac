import React from "react";
import styles from "./Header.module.css";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.contentContainer} to={"/"}>
        <img alt={"Logo"} className={styles.logo} src={logo} />
        <h1 className={styles.text}>Zodiac Signs</h1>
      </Link>
    </div>
  );
};
