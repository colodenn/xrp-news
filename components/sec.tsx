import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Sec = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get() {
      let data = await supabase
        .from("news")
        .select("*, title")
        .ilike("title", "%SEC%");
      setData(data.data);
    }
    get();
  }, []);
  return (
    <>
      {data.map((e) => {
        return (
          <a
            href={e.guid}
            className="cursor-pointer border-2 border-black px-4 py-2 flex mb-8"
          >
            <div className="flex justify-center ">
              <img className="h-16 my-auto" src={e.imageurl} />
            </div>
            <div className="ml-8 w-11/12">
              <h1 className="font-mono text-2xl font-semibold">{e.title}</h1>
              <p className="font-mono text-large ">{e.body}</p>
            </div>
            <div className="my-auto ">
              <div className="cursor-pointer ">
                <svg
                  onClick={(e) => {
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
              <p className="font-mono text-center">{e.upvotes}</p>
              {/* Arrow Down  */}
              <div className="cursor-pointer">
                <svg
                  onClick={(e) => {
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
          </a>
        );
      })}
    </>
  );
};

export default Sec;
