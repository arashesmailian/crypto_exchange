import React, { useEffect, useState } from "react";

//API
import { getCoin } from "../services/api";

//style
import styles from "./landing.module.css";

//components
import Loader from "./Loader";
import Coin from "./Coin";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setTimeout(() => {
        setCoins(data);
      }, 1000);
    };
    fetchAPI();
  }, []);

  const searchHAndler = (e) => {
    setSearch(e.target.value);
  };
  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHAndler}
      />
      <div className={styles.coin_container}>
        {coins.length ? (
          <div>
            {searchedCoins.map((coin) => (
              <Coin key={coin.id} coin={coin} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Landing;
