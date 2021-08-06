import { useState } from "react";
import Ticker from "react-ticker";
import GetTicker from "../getTicker";
const Header = (props) => {
  const [speed, setSpeed] = useState(7);
  return (
    <>
      <div style={{ backgroundColor: "#1b1b1b" }}>
        <div
          onMouseEnter={() => setSpeed(0)}
          onMouseLeave={() => setSpeed(7)}
          className=" mx-auto"
          style={{
            maxWidth: "1140px",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <Ticker speed={speed}>{() => <GetTicker />}</Ticker>
        </div>
      </div>
    </>
  );
};

export default Header;
