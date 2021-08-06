const LayoutHeader = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <a className="flex align-center">
          <div className="mr-4 my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 my-auto align-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <h1 className="font-semibold my-auto">XRP to the Moon</h1>
        </a>
        <div className="my-auto  tracking-widest flex text-sm font-medium text-gray-700">
          {/* <a href="#" style={{ color: "#1b1b1b" }} className="mr-12 my-auto">
            Crypto
          </a>
          <a href="#" style={{ color: "#1b1b1b" }} className="mr-12 my-auto">
            Crypto
          </a>
          <a href="#" style={{ color: "#1b1b1b" }} className="mr-12 my-auto">
            Crypto
          </a> */}
          <div
            className=" my-auto p-3 mr-12"
            style={{ backgroundColor: "#1b1b1b" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" my-auto  align-center h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <a href="#" className="my-auto text-gray-800 text-sm font-semibold">
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default LayoutHeader;
