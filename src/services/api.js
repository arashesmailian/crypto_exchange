import axios from "axios";

const BASE_URL = (page) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;

const getCoin = async (pageNumber = 1) => {
  const response = await axios.get(BASE_URL(pageNumber));
  console.log(pageNumber);

  return response.data;
};

export { getCoin };
