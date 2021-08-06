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
          {news.map((e) => (
            <div className="flex border-2 mb-8 border-black px-8 py-4">
              <div className="mr-16 ">Image here</div>
              <div>
                <p>06. August</p>
                <h5>The story of Hodlnaut and Juntao Zhu</h5>
                <p>
                  <span>Reddit</span> - <span>2 Minute Read</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
