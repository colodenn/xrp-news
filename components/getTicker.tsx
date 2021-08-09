import { useEffect, useState } from "react";

const GetTicker = () => {
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
    }).then((res) => res.json());

  useEffect(() => {
    fetcher("/api/ticker").then((data) => {
      console.log(data.prices);
      setTicker(data.prices[0]);
    });
  }, []);

  const [ticker, setTicker] = useState({
    xrp_price: 0,
    xrp_gain: 0,
    xrp_cap: 0,
    xrp_cap_gain: 0,
    crypto_cap: 0,
    cypto_gain: 0,
  });
  return (
    <div className="flex">
      <div className="flex mr-8 text-white text-xs align-middle">
        <h5 className="font-bold mr-2" style={{ color: "rgb(153, 153, 153)" }}>
          XRP Price
        </h5>
        <h5 className="font-bold mr-2	">${ticker.xrp_price}</h5>
        <h5 style={{ color: "#28a745" }}>
          {Number(ticker.xrp_gain).toFixed(2)}
        </h5>
      </div>
      <div className="flex mr-8 text-white text-xs align-middle">
        <h5 className="font-bold mr-2" style={{ color: "rgb(153, 153, 153)" }}>
          XRP Market Cap
        </h5>
        <h5 className="font-bold mr-2	">${ticker.xrp_cap}</h5>
        <h5 style={{ color: "#28a745" }}>
          {Number(ticker.xrp_cap_gain).toFixed(2)}
        </h5>
      </div>
      <div className="flex mr-8 text-white text-xs align-middle">
        <h5 className="font-bold mr-2" style={{ color: "rgb(153, 153, 153)" }}>
          Crypto Market Cap
        </h5>
        <h5 className="font-bold mr-2	">${ticker.crypto_cap}</h5>
        <h5 style={{ color: "#28a745" }}>
          {Number(ticker.cypto_gain).toFixed(2)}
        </h5>
      </div>
    </div>
  );
};

export default GetTicker;
