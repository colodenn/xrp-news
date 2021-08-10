const Sec = (props) => {
  const data = [
    // {
    //   id: 1,
    //   votes: 0,
    //   title: "Title",
    //   content:
    //     "Lorem impsum Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum ",
    //   img: "https://www.handelsblatt.com/images/image/27423798/3-format2003.img",
    // },
    // {
    //   id: 2,
    //   votes: 0,
    //   title: "Title",
    //   content:
    //     "Lorem impsum Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum ",
    //   img: "https://www.handelsblatt.com/images/image/27423798/3-format2003.img",
    // },
  ];
  return (
    <>
      {data.map((e) => {
        return (
          <a
            href={"/posts/" + e.id}
            className="cursor-pointer border-2 border-black px-4 py-2 flex mb-8"
          >
            <div className="flex justify-center">
              <img className="h-16 my-auto" src={e.img} />
            </div>
            <div className="ml-8">
              <h1 className="font-mono text-2xl font-semibold">{e.title}</h1>
              <p className="font-mono text-large ">{e.content}</p>
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
              <p className="font-mono text-center">{e.votes}</p>
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
