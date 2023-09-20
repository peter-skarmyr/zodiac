import React from "react";
import { Sign } from "../types/sign/sign";
import styles from "./ZodiacCard.module.css";
import { signBirthdayRange } from "../types/sign/signBirthdayRange";
import { formatBirthdayRange } from "../types/sign/birthdayRange";
import { signDescriptionShort } from "../types/sign/signDescriptionShort";
import { ZodiacCardImg } from "./ZodiacCardImg";
import { signSymbol } from "../types/sign/signSymbol";
import { Link } from "react-router-dom";
import { signPath } from "../types/sign/signPath";
import { signDisplayName } from "../types/sign/signDisplayName";

interface Props {
  sign: Sign;
}

export const ZodiacCard = ({ sign }: Props) => {
  return (
    <Link to={signPath[sign]} className={styles.container}>
      <div className={styles.icon}>
        <ZodiacCardImg sign={sign} />
      </div>
      <h2
        className={styles.name}
      >{`${signDisplayName[sign]} ${signSymbol[sign]}`}</h2>
      <h4 className={styles.date}>
        {formatBirthdayRange(signBirthdayRange[sign])}
      </h4>
      <div className={styles.description}>{signDescriptionShort[sign]}</div>
    </Link>
  );
};
