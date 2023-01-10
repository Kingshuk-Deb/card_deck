import React from "react";
import styles from "../../styles/Card.module.css";

const SevenCard = ({ cardType, cardLogo }: any) => {
  return (
    <div className={styles.any_card_test_container}>
      <div className={styles.any_card_test_top}>
        <div>{cardType}</div>
        <div>{cardLogo}</div>
      </div>
      <div
        className={styles.most_card_leaves_container_coloumn}
        style={{
          flexDirection: "row",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>{cardLogo}</div>
          <div>{cardLogo}</div>
          <div className={styles.two_card_center_bottom_container}>
            {cardLogo}
          </div>
        </div>
        <div
          style={{
            marginTop: "48px",
          }}
        >
          {cardLogo}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>{cardLogo}</div>
          <div>{cardLogo}</div>
          <div className={styles.two_card_center_bottom_container}>
            {cardLogo}
          </div>
        </div>
      </div>
      <div className={styles.any_card_test_bottom}>
        <div>{cardType}</div>
        <div>{cardLogo}</div>
      </div>
    </div>
  );
};

export default SevenCard;
