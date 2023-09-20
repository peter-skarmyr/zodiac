import React from "react";
import { Sign } from "../types/sign/sign";
import styles from "./SingleSignPageImg.module.css";
import { signImg } from "../types/sign/signImg";

interface Props {
  sign: Sign;
  className: string;
}

export const SingleSignPageImg = ({ sign, className }: Props) => (
  <img
    src={signImg[sign]}
    alt={"illustration"}
    className={`${styles.zodiacImg} ${className}`}
  />
);
