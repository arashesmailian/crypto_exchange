import React from "react";

//style
import styles from "./coin.module.css";

const Coin = ({ coin }) => {
  return (
    <div className={styles.container}>
      <img src={coin.image} />
      <div className={styles.name}>{coin.name}</div>
      <div className={styles.symbol}>{coin.symbol.toUpperCase()}</div>
      <div className={styles.price}>
        $ {coin.current_price.toLocaleString()}
      </div>
      <div
        className={
          coin.price_change_percentage_24h > 0
            ? styles.green_price_change
            : styles.red_price_change
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}
      </div>
      <div className={styles.market_cap}>
        $ {coin.market_cap.toLocaleString()}
      </div>
    </div>
  );
};

export default Coin;
