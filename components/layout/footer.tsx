const Footer = (props) => {
  return (
    <>
      <div className="mx-auto text-center mt-16">
        <div className=" border-b-2 border-black"></div>
        <div className="mx-auto mt-8">
          <ul className=" tracking-tight font-mono text-gray-500 font-medium flex mx-auto text-center justify-center">
            <a href="#" className="underline   w-1/3 px-2 text-center">
              Disclaimer
            </a>
            <a href="#" className="underline w-1/3  px-2  text-center ">
              Privacy Policy
            </a>
            <a href="#" className="underline  w-1/3 px-2 text-center">
              Terms of Service
            </a>
          </ul>
          <p className="tracking-tight text-center 	font-mono text-gray-500 font-medium mt-4">
            2021 XRP to the Moon.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
