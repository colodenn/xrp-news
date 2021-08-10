import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Linechart from "./linechart";

const CalculateRevenue = (props) => {
  const [price, setPrice] = useState(0.72);
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState(10);
  const [returns, setReturn] = useState(39);
  const [revenue, setRevenue] = useState(
    price * amount * Math.pow(1 + returns / 100, term - 1)
  );
  const [data, setData] = useState(createData(price, amount, term, returns));

  useEffect(() => {
    supabase
      .from("ticker")
      .select("xrp_price")
      .order("created_at", { ascending: false })
      .limit(1)
      .then((res) => setPrice(res.data[0].xrp_price.toFixed(2)));
  }, []);
  function createData(price, amount, term, returns) {
    const data = [];
    for (let i = 0; i < term; i++) {
      data.push({
        x: i + 1,
        y: Number((price * amount * Math.pow(1 + returns / 100, i)).toFixed(2)),
        z: Number(price * Math.pow(1 + returns / 100, i)).toFixed(2),
      });
    }
    return data;
  }

  function change() {
    setRevenue(price * amount * Math.pow(1 + returns / 100, term - 1));
    setData(createData(price, amount, term, returns));
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
      <div className="mt-16">
        <h3 className="text-xl font-medium">Return Calculator:</h3>
        <div className=" mx-auto flex justify-between">
          <div className="">
            <div className="mt-4">
              <label htmlFor="price" className="block">
                <span>Price</span>
                <br />
                <input
                  step="0.001"
                  onChange={(e) => {
                    setPrice(parseFloat(e.target.value));
                    setRevenue(
                      parseFloat(e.target.value) *
                        amount *
                        Math.pow(1 + returns / 100, term - 1)
                    );
                    setData(
                      createData(
                        parseFloat(e.target.value),
                        amount,
                        term,
                        returns
                      )
                    );
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
                    setRevenue(
                      parseFloat(e.target.value) *
                        price *
                        Math.pow(1 + returns / 100, term - 1)
                    );
                    setData(
                      createData(
                        price,
                        parseFloat(e.target.value),
                        term,
                        returns
                      )
                    );
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
                    setRevenue(
                      amount *
                        price *
                        Math.pow(
                          1 + returns / 100,
                          parseFloat(e.target.value) - 1
                        )
                    );
                    setData(
                      createData(
                        price,
                        amount,
                        parseFloat(e.target.value),
                        returns
                      )
                    );
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
                Yearly return in %
                <br />
                <input
                  step="0.1"
                  onChange={(e) => {
                    setReturn(parseFloat(e.target.value));
                    setRevenue(
                      amount *
                        price *
                        Math.pow(1 + parseFloat(e.target.value) / 100, term - 1)
                    );
                    setData(
                      createData(
                        price,
                        amount,
                        term,
                        parseFloat(e.target.value)
                      )
                    );
                  }}
                  type="number"
                  name="price"
                  className="pl-4 font-bold border-black border-2 focus:border-none  p-2 "
                  value={returns}
                />
              </label>
            </div>
          </div>
          <div className="w-1/2 mt-10">
            <Linechart data={data} />
          </div>
          <div className="mt-8">
            <div className="mb-4">
              <h5 className="text-widest tracking-widest font-light text-xl text-right">
                Total Return Rate
              </h5>
              <h1 className="text-2xl font-semibold text-right">
                {Number(
                  ((revenue / (price * amount) - 1) * 100).toFixed(2)
                ).toLocaleString("en-US")}
                %
              </h1>
            </div>
            <div className="mb-4">
              <h5 className="text-widest tracking-widest font-light text-xl text-right">
                Return in Lambos
              </h5>
              <h1 className="text-2xl font-semibold text-right">
                {Number((revenue / 220000).toFixed(2)).toLocaleString("en-US")}
              </h1>
            </div>
            <div className="mb-4">
              <h5 className="text-widest tracking-widest font-light text-xl text-right">
                Total Return
              </h5>
              <h1 className="text-2xl font-semibold text-right">
                ${Number(revenue.toFixed(2)).toLocaleString("en-US")}
              </h1>
            </div>
            <div>
              <h5 className="text-widest tracking-widest font-light text-xl text-right">
                XRP Price
              </h5>
              <h1 className="text-2xl font-semibold text-right">
                $
                {Number(
                  (price * Math.pow(1 + returns / 100, term - 1)).toFixed(2)
                ).toLocaleString("en-US")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculateRevenue;
