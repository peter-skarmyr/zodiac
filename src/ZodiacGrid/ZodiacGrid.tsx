import React from "react";
import styles from "./ZodiacGrid.module.css";
import { ZodiacCard } from "./ZodiacCard";
import { orderedSigns } from "../types/sign/orderedSigns";

export const ZodiacGrid = () => {
  return (
    <div className={styles.zodiacGrid}>
      {orderedSigns.map((sign) => (
        <ZodiacCard sign={sign} key={sign} />
      ))}
    </div>
  );
};
