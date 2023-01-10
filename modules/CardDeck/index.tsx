import { useEffect, useState } from "react";
import AceCard from "../../components/AceCard";
import EightCard from "../../components/EightCard";
import FiveCard from "../../components/FiveCard";
import FourCard from "../../components/FourCard";
import PeopleCard from "../../components/PeopleCard";
import NineCard from "../../components/NineCard";
import SevenCard from "../../components/SevenCard";
import SixCard from "../../components/SixCard";
import TenCard from "../../components/TenCard";
import ThreeCard from "../../components/ThreeCard";
import TwoCard from "../../components/TwoCard";
import styles from "../../styles/Card.module.css";

const listValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const CardDeck = () => {
  const [value, setValue] = useState("♠");
  const [color, setColor] = useState("#000");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (e.target.value === "♠") {
      setColor("black");
    } else if (e.target.value === "♥") {
      setColor("red");
    } else if (e.target.value === "♦") {
      setColor("red");
    } else {
      setColor("black");
    }
  };

  useEffect(() => {}, [value]);

  return (
    <>
      <div>
        <select
          style={{
            width: "240px",
            height: "40px",
          }}
          value={value}
          onChange={handleChange}
        >
          <option value="♠">Spades</option>
          <option value="♥">Hearts</option>
          <option value="♦">Diamonds</option>
          <option value="♣">Clubs</option>
        </select>
      </div>
      {listValue.map((data) => (
        <div
          style={{
            color: color,
          }}
          key={data}
        >
          <div className={styles.card_container}>
            {data === "A" ? (
              <AceCard cardLogo={value} cardType={data} />
            ) : data === "2" ? (
              <TwoCard cardLogo={value} cardType={data} />
            ) : data === "3" ? (
              <ThreeCard cardLogo={value} cardType={data} />
            ) : data === "4" ? (
              <FourCard cardLogo={value} cardType={data} />
            ) : data === "5" ? (
              <FiveCard cardLogo={value} cardType={data} />
            ) : data === "6" ? (
              <SixCard cardLogo={value} cardType={data} />
            ) : data === "7" ? (
              <SevenCard cardLogo={value} cardType={data} />
            ) : data === "8" ? (
              <EightCard cardLogo={value} cardType={data} />
            ) : data === "9" ? (
              <NineCard cardLogo={value} cardType={data} />
            ) : data === "10" ? (
              <TenCard cardLogo={value} cardType={data} />
            ) : (
              <PeopleCard cardLogo={value} cardType={data} />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CardDeck;
