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
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin(pageNumber);
      setTimeout(() => {
        setCoins(coins.concat(data));
      }, 1000);
    };
    fetchAPI();
  }, [pageNumber]);

  const searchHAndler = (e) => {
    setSearch(e.target.value);
  };
  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleNextPage = () => {
    console.log("next page");
    setPageNumber((prev) => prev + 1);
  };
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
      <button onClick={handleNextPage}>Next page</button>
    </>
  );
};

export default Landing;
