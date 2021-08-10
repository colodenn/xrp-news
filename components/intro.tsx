const Intro = (props) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-semibold px-8 md:px-0">
          Get notified on XRP news
        </h1>
        <p className="mt-12 md:px-72 px-8 font-medium text-large text-gray-500">
          <span className="text-blue-500">XRP</span> is the fastest & most
          scalable digital asset, enabling real-time global payments anywhere in
          the world. Using <span className="text-blue-500"> XRP</span>, banks
          can source liquidity on demand in real time without having to pre-fund
          nostro accounts. Payment Providers use
          <span className="text-blue-500"> XRP</span> to expand reach into new
          markets, lower foreign exchange costs and provide faster payment
          settlement.
        </p>
      </div>
    </>
  );
};

export default Intro;
