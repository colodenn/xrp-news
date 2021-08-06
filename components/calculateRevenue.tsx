import { useEffect, useState } from "react";
import Linechart from "./linechart";

const CalculateRevenue = (props) => {
  const [price, setPrice] = useState(0.72);
  const [amount, setAmount] = useState(1000);
  const [term, setTerm] = useState(10);
  const [returns, setReturn] = useState(6);
  const [revenue, setRevenue] = useState(
    price * amount * Math.pow(1 + returns / 100, term - 1)
  );
  const [data, setData] = useState(createData());

  function createData() {
    const data = [];
    for (let i = 0; i < term; i++) {
      data.push({
        x: i + 1,
        y: price * amount * Math.pow(1 + returns / 100, i),
      });
    }
    return data;
  }

  function change() {
    setRevenue(price * amount * Math.pow(1 + returns / 100, term - 1));
    setData(createData());
  }

  function formatNumber(n) {
    if (n < 0) {
      throw "must be non-negative: " + n;
    }
    if (n === 0) {
      return "0";
    }

    var output = [];

    for (; n >= 1000; n = Math.floor(n / 1000)) {
      output.unshift(String(n % 1000).padStart(3, "0"));
    }
    output.unshift(n);

    return output.join(" ");
  }

  return (
    <>
      <div className="mt-8 mx-auto flex justify-between">
        <div className="">
          <div className="mt-4">
            <label htmlFor="price" className="block">
              <span>Price</span>
              <br />
              <input
                step="0.001"
                onChange={(e) => {
                  setPrice(parseFloat(e.target.value));
                  change();
                }}
                name="price"
                type="number"
                className="pl-4 font-bold border-black border-2 focus:border-none  p-2 "
                value={price}
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="amount">
              Amount
              <br />
              <input
                onChange={(e) => {
                  setAmount(parseFloat(e.target.value));
                  change();
                }}
                name="amount"
                type="number"
                className="pl-4 font-bold border-black border-2 focus:border-none  p-2 "
                value={amount}
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="price">
              Term
              <br />
              <input
                onChange={(e) => {
                  setTerm(parseFloat(e.target.value));
                  change();
                }}
                name="price"
                type="number"
                className="pl-4 font-bold border-black border-2 focus:border-none  p-2 "
                value={term}
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="price">
              Yearly return
              <br />
              <input
                step="0.1"
                onChange={(e) => {
                  setReturn(parseFloat(e.target.value));
                  change();
                }}
                type="number"
                name="price"
                className="pl-4 font-bold border-black border-2 focus:border-none  p-2 "
                value={returns}
              />
            </label>
          </div>
        </div>
        <div className="w-3/4 mt-8">
          <Linechart data={data} />
        </div>
        <div className="mt-8">
          <div>
            <h5 className="text-widest tracking-widest font-light text-xl text-right">
              Totwal Return Rate
            </h5>
            <h1 className="text-2xl font-semibold text-right">
              {((revenue / (price * amount) - 1) * 100).toFixed(2)}%
            </h1>
          </div>
          <div>
            <h5 className="text-widest tracking-widest font-light text-xl text-right">
              Return in Lambos
            </h5>
            <h1 className="text-2xl font-semibold text-right">
              {(revenue / 220000).toFixed(2)}
            </h1>
          </div>
          <div>
            <h5 className="text-widest tracking-widest font-light text-xl text-right">
              Total Return
            </h5>
            <h1 className="text-2xl font-semibold text-right">
              ${revenue.toFixed(2)}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculateRevenue;
