import React from "react";
import {
  GiCardKingSpades,
  GiCardJackSpades,
  GiCardQueenClubs,
} from "react-icons/gi";
import styles from "../../styles/Card.module.css";

const KingCard = ({ cardType, cardLogo }: any) => {
  return (
    <div className={styles.any_card_test_container}>
      <div className={styles.any_card_test_top}>
        <div>{cardType}</div>
        <div>{cardLogo}</div>
      </div>
      <div className={styles.people_card_border}></div>
      <div className={styles.people_card_logo}>
        {cardType === "K" ? (
          <GiCardKingSpades />
        ) : cardType === "Q" ? (
          <GiCardQueenClubs />
        ) : (
          <GiCardJackSpades />
        )}
      </div>
      <div className={styles.any_card_test_bottom}>
        <div>{cardType}</div>
        <div>{cardLogo}</div>
      </div>
    </div>
  );
};

export default KingCard;
