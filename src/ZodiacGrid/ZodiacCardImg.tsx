import React from "react";
import { Sign } from "../types/sign/sign";
import styles from "./ZodiacCardImg.module.css";
import { signImg } from "../types/sign/signImg";

interface Props {
  sign: Sign;
}

export const ZodiacCardImg = ({ sign }: Props) => (
  <img src={signImg[sign]} alt={"illustration"} className={styles.zodiacImg} />
);
