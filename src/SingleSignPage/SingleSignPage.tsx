import React, { useEffect, useMemo } from "react";
import { Sign } from "../types/sign/sign";
import styles from "./SingleSignPage.module.css";
import { signSymbol } from "../types/sign/signSymbol";
import { formatBirthdayRange } from "../types/sign/birthdayRange";
import { signBirthdayRange } from "../types/sign/signBirthdayRange";
import { signDescriptionLong } from "../types/sign/signDescriptionLong";
import { SingleSignPageImg } from "./SingleSignPageImg";
import { signDisplayName } from "../types/sign/signDisplayName";
import { Link } from "react-router-dom";
import { signPath } from "../types/sign/signPath";
import { orderedSigns } from "../types/sign/orderedSigns";
import next from "../img/next.svg";
import previous from "../img/previous.svg";
interface Props {
  sign: Sign;
}
export const SingleSignPage = ({ sign }: Props) => {
  // Always scroll to the top on first render
  useEffect(() => window.scrollTo(0, 0), []);

  const compatibleSigns = useMemo(() => signCompatibility[sign], [sign]);
  const previousSign = useMemo(() => {
    const indexOfCurrentSign = orderedSigns.indexOf(sign);
    return indexOfCurrentSign === 0
      ? orderedSigns[orderedSigns.length - 1]
      : orderedSigns[indexOfCurrentSign - 1];
  }, [sign]);

  const nextSign = useMemo(() => {
    const indexOfCurrentSign = orderedSigns.indexOf(sign);
    return indexOfCurrentSign === orderedSigns.length - 1
      ? orderedSigns[0]
      : orderedSigns[indexOfCurrentSign + 1];
  }, [sign]);

  return (
    <div className={styles.container}>
      <Link className={styles.previous} to={signPath[previousSign]}>
        <img alt={"Previous"} src={previous} />
      </Link>
      <SingleSignPageImg sign={sign} className={styles.img} />
      <div className={styles.header}>
        <h2
          className={styles.name}
        >{`${signDisplayName[sign]} ${signSymbol[sign]}`}</h2>
        <h4 className={styles.date}>
          {formatBirthdayRange(signBirthdayRange[sign])}
        </h4>
      </div>
      <div className={`${styles.textSection} ${styles.summary}`}>
        <h4>Summary</h4>
        {signDescriptionLong[sign]}
      </div>

      <div className={`${styles.textSection} ${styles.traits}`}>
        <h4>Traits</h4> {zodiacTraits[sign]}
      </div>

      <div className={`${styles.textSection} ${styles.compatible}`}>
        <h4>Compatible Signs </h4>
        <div className={styles.linkContainer}>
          {compatibleSigns.map((sign, i) => {
            return (
              <Link to={signPath[sign]} className={styles.link}>
                {`${signDisplayName[sign]}${
                  i === compatibleSigns.length - 1 ? "" : ","
                }`}
              </Link>
            );
          })}
        </div>
      </div>
      <Link className={styles.next} to={signPath[nextSign]}>
        <img alt={"Next"} src={next} />
      </Link>
    </div>
  );
};

const zodiacTraits: Record<Sign, string> = {
  Aries:
    "Energetic, courageous, and optimistic. Aries are natural leaders, passionate and confident.",
  Taurus:
    "Reliable, patient, and practical. Taurus individuals value stability and enjoy life's sensual pleasures.",
  Gemini:
    "Adaptable, outgoing, and intelligent. Geminis are known for their dual nature, being curious and affectionate.",
  Cancer:
    "Intuitive, emotional, and empathetic. Cancers are nurturing and sensitive, valuing family and home.",
  Leo: "Dramatic, self-confident, and dominant. Leos love to be admired and enjoy being the center of attention.",
  Virgo:
    "Analytical, kind, and hardworking. Virgos are detail-oriented and enjoy helping others.",
  Libra:
    "Diplomatic, fair-minded, and sociable. Libras seek harmony and balance in their relationships.",
  Scorpio:
    "Passionate, stubborn, and resourceful. Scorpios are known for their intensity and depth of emotions.",
  Sagittarius:
    "Generous, idealistic, and great sense of humor. Sagittarians love freedom and are curious and energetic.",
  Capricorn:
    "Disciplined, responsible, and self-controlled. Capricorns are known for their practicality and ambition.",
  Aquarius:
    "Independent, original, and humanitarian. Aquarians are thinkers and highly value individuality.",
  Pisces:
    "Compassionate, artistic, and intuitive. Pisces are gentle and wise, often feeling emotions deeply.",
};

const signCompatibility: Record<Sign, Sign[]> = {
  Aries: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
  Taurus: ["Virgo", "Capricorn", "Cancer", "Pisces"],
  Gemini: ["Libra", "Aquarius", "Aries", "Leo"],
  Cancer: ["Scorpio", "Pisces", "Taurus", "Virgo"],
  Leo: ["Aries", "Sagittarius", "Gemini", "Libra"],
  Virgo: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
  Libra: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
  Scorpio: ["Cancer", "Pisces", "Virgo", "Capricorn"],
  Sagittarius: ["Aries", "Leo", "Libra", "Aquarius"],
  Capricorn: ["Taurus", "Virgo", "Scorpio", "Pisces"],
  Aquarius: ["Gemini", "Libra", "Aries", "Sagittarius"],
  Pisces: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
};
