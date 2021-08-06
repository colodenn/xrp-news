import CalculateRevenue from "./calculateRevenue";
import Intro from "./intro";
import Footer from "./layout/footer";
import News from "./news";
import Newsletter from "./newsletter";
const MainContent = (props) => {
  return (
    <>
      <div className="mt-8 mb-16">
        <Intro />
        <CalculateRevenue />
        {/* <div className="border-b-2 mt-16 mb-16 border-black w-full"></div> */}
        <News />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default MainContent;
