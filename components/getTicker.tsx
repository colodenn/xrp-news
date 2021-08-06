import { useEffect, useState } from "react";

const GetTicker = () => {
  const tickerData = [
    { label: "Crypto Market Cap", value: "$2,111,444,241,123", gain: "5.45%" },
    { label: "XRP Price", value: "$0.72", gain: "5.45%" },
    { label: "XRP Market Cap", value: "$111,444,241,123", gain: "5.45%" },
  ];
  const [ticker, setTicker] = useState(tickerData);
  useEffect(() => {
    setTicker(tickerData);
    console.log("set Tickerdata");
  }, []);

  return (
    <div className="flex">
      {ticker.map((item, index) => (
        <div key={index} className="flex mr-8 text-white text-xs align-middle">
          <h5
            className="font-bold mr-2"
            style={{ color: "rgb(153, 153, 153)" }}
          >
            {item.label}
          </h5>
          <h5 className="font-bold mr-2	">{item.value}</h5>
          <h5 style={{ color: "#28a745" }}>{item.gain}</h5>
        </div>
      ))}
    </div>
  );
};

export default GetTicker;
