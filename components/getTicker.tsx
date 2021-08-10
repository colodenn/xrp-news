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
    <div className="flex ">
      <div className="inline-block md:flex mr-4 md:mr-8 text-white text-xs align-middle ">
        <h5 className="font-bold mr-2 " style={{ color: "rgb(153, 153, 153)" }}>
          XRP Price
        </h5>
        <h5 className="font-bold mr-2 pr-8 md:pr-0	">
          ${ticker.xrp_price.toFixed(3)}
        </h5>
        <h5
          style={
            String(ticker.xrp_gain)[0] !== "-"
              ? { color: "#28a745" }
              : { color: "red" }
          }
        >
          {Number(ticker.xrp_gain).toFixed(2)}%
        </h5>
      </div>
      <div className="inline-block md:flex mr-8 text-white text-xs align-middle">
        <h5 className="font-bold mr-2 " style={{ color: "rgb(153, 153, 153)" }}>
          XRP Market Cap
        </h5>
        <h5 className="font-bold mr-2	">
          ${Number(ticker.xrp_cap.toFixed(0)).toLocaleString("en-US")}
        </h5>
        <h5
          style={
            String(ticker.xrp_cap_gain)[0] !== "-"
              ? { color: "#28a745" }
              : { color: "red" }
          }
        >
          {Number(ticker.xrp_cap_gain).toFixed(2)}%
        </h5>
      </div>
      <div className="md:flex inline-block mr-8 text-white text-xs align-middle">
        <h5 className="font-bold mr-2" style={{ color: "rgb(153, 153, 153)" }}>
          Crypto Market Cap
        </h5>
        <h5 className="font-bold mr-2	">
          ${Number(ticker.crypto_cap.toFixed(0)).toLocaleString("en-US")}
        </h5>
        <h5
          style={
            String(ticker.cypto_gain)[0] !== "-"
              ? { color: "#28a745" }
              : { color: "red" }
          }
        >
          {Number(ticker.cypto_gain).toFixed(2)}%
        </h5>
      </div>
    </div>
  );
};

export default GetTicker;
