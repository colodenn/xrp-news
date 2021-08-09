import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const News = (props) => {
  const [news, setNews] = useState([]);
  const [days, setDays] = useState(365);
  const [price, setPrice] = useState(0.72);
  const fetcher = (url, token, data) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json", token }),
      credentials: "same-origin",
      body: data,
    }).then((res) => res.json());
  const [session, setSession] = useState(null);
  const mySubscription = supabase
    .from("predictions")
    .on("INSERT", (payload) => {
      setNews([payload.new].concat(news));
      console.log("new subscribes");
    })
    .subscribe();

  useEffect(() => {
    setSession(supabase.auth.session());
    async function get() {
      console.log("test");
      let res = await supabase
        .from("predictions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);
      setNews(res.data);
      console.log(res);
    }

    get();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  function makePrediction() {
    fetcher(
      "/api/prediction",
      session.access_token,
      JSON.stringify({ price: price, days: days })
    );
  }
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
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
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
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                  />
                  <span className="ml-4">Days</span>
                </label>
              </div>
            </div>
            <div>
              {session ? (
                <button
                  onClick={() => makePrediction()}
                  className="ml-8     hover:bg-transparent hover:text-black border-2 border-black bg-black text-white px-4 py-2 font-medium"
                >
                  Submit
                </button>
              ) : (
                <button className="ml-8     hover:bg-transparent hover:text-black border-2 border-black bg-black text-white px-4 py-2 font-medium">
                  Login to submit
                </button>
              )}
            </div>
          </div>
          {news.map((e, index) => (
            <div
              key={index}
              className="  flex justify-between font-mono flex border-2 mb-8 border-black px-8 py-4"
            >
              <div className="flex font-mono">
                <div className="mr-16 my-auto ">
                  <h1 className="text-4xl font-bold  w-20">${e.price}</h1>
                </div>
                <div>
                  <p className="font-semibold">in {e.days} days</p>
                  <h5>
                    somebody predicts on {e.created_at} that XRP will hit $
                    {e.price} in {e.days} days.
                  </h5>
                  <p className="italic">
                    <span className="italic">anon</span> -{" "}
                    <span>on {e.created_at}</span>
                  </p>
                </div>
              </div>
              <div className="text-center   my-auto ">
                {/* Arrow Up */}
                <div className="cursor-pointer ">
                  <svg
                    onClick={(e) => {
                      news[index].votes = news[index].votes + 1;
                      setNews([...news]);
                      if (typeof window != "undefined") {
                        (e.target as HTMLElement).style.stroke = "blue";
                      }
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    // change stroke color to match your design
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
                <p className="font-mono">{e.votes}</p>
                {/* Arrow Down  */}
                <div className="cursor-pointer">
                  <svg
                    onClick={(e) => {
                      news[index].votes = news[index].votes - 1;
                      setNews([...news]);

                      (e.target as HTMLElement).style.stroke = "blue";
                    }}
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
      <style global jsx>{`
        .slide-in-left {
          -webkit-animation: slide-in-left 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }
        /* ----------------------------------------------
 * Generated by Animista on 2021-8-6 16:14:11
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

        /**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
        @-webkit-keyframes slide-in-left {
          0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-left {
          0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default News;
