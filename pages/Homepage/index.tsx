import Image from "next/image";
import styles from "../../styles/Home.module.css";

const fiveNo = [0, 1, 2, 3];

const Homepage = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.left}>
        <Image
          className={styles.shoeImg}
          src={"/images/shoe.png"}
          alt="Shoe"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // gap: "6px",
            }}
          >
            {fiveNo.map((num: any) => (
              <Image
                src={"/images/fullStar.png"}
                alt="Shoe"
                width={18}
                height={18}
                key={num}
              />
            ))}
            <Image
              src={"/images/halfStar.png"}
              alt="Shoe"
              width={18}
              height={18}
            />
          </div>
          <h2
            style={{
              fontFamily: "sans-serif",
              fontWeight: "100",
            }}
          >
            ₹ 9,899.99
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <h2
            style={{
              fontWeight: "400",
            }}
          >
            Nike Air Bob Marley
          </h2>
          <p
            style={{
              fontWeight: "100",
            }}
          >
            Mens Shoe
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#690B0B",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
            }}
          >
            <Image src={"/images/plus.png"} alt="Shoe" width={18} height={18} />
          </div>
          <div>10</div>
          <div
            style={{
              background: "#690B0B",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
            }}
          >
            <Image src={"/images/minus.png"} alt="Shoe" width={18} height={2} />
          </div>
        </div>
        <div className={styles.button}>
          <p
            style={{
              paddingBlock: "12px",
              paddingInline: "24px",
              fontSize: "24px",
            }}
          >
            ADD TO CART
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
