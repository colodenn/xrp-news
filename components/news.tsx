import { useState } from "react";

const News = (props) => {
  const [news, setNews] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      <div className="mt-24">
        <h3 className="text-xl font-medium">News:</h3>
        <div className="flex mt-4 w-full">
          <button className="w-1/6 bg-black px-4 py-2 text-white font-medium">
            Price Predictions
          </button>
          <button className=" w-1/6 px-4 py-2 text-black   border-2 border-black font-medium">
            SEC
          </button>
          <button className=" w-1/6 px-4 py-2 text-black  border-l-0 border-2 border-black font-medium">
            News
          </button>
          <button className=" w-1/6 px-4 py-2 text-black  border-l-0 border-2 border-black font-medium">
            Reddit
          </button>
        </div>
        <div className="mt-8  ">
          <div className="flex font-mono justify-between border-2 mb-8 border-black px-8 py-4 align-center my-auto">
            <div className="flex ">
              <div className="my-auto mr-4 flex">
                <label htmlFor="price align-center my-auto mr-4">
                  <span className="mr-4">Price Prediction:</span>
                  <input
                    name="price"
                    className="my-auto border-2 border-black px-2 py-2 align-center"
                    placeholder="$0.72"
                  />
                </label>
              </div>
              <div className="my-auto ">
                <label htmlFor="price align-center my-auto mr-4">
                  <span className="mr-4">in next</span>
                  <input
                    name="price"
                    className="my-auto border-2 border-black px-2 py-2 align-center"
                    placeholder="356"
                  />
                  <span className="ml-4">Days</span>
                </label>
              </div>
            </div>
            <div>
              <button className="ml-8     hover:bg-transparent hover:text-black border-2 border-black bg-black text-white px-4 py-2 font-medium">
                Submit
              </button>
            </div>
          </div>
          {news.map((e) => (
            <div className="flex justify-between font-mono flex border-2 mb-8 border-black px-8 py-4">
              <div className="flex font-mono">
                <div className="mr-16 my-auto ">
                  <h1 className="text-4xl font-bold">$5</h1>
                </div>
                <div>
                  <p className="font-semibold">in 365 days</p>
                  <h5>
                    /u/DeepFuckingValue predicts on 6. August that XRP will hit
                    $5 in 365 days.
                  </h5>
                  <p className="italic">
                    <span className="italic">DeepFuckingValue</span> -{" "}
                    <span>on 6. August</span>
                  </p>
                </div>
              </div>
              <div className="text-center   my-auto ">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <p className="font-mono">244</p>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <div className="mx-auto flex justify-center">
            <button className="mx-auto bg-black hover:bg-transparent px-4 text-white font-medium hover:text-black py-2 border-black border-2 ">
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
