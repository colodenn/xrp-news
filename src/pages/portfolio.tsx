import Header from "../../components/layout/header";
import Layout from "../../components/layout/layout";
import LayoutHeader from "../../components/layout/layoutHeader";
import MainContent from "../../components/mainContent";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <LayoutHeader />
        <div className="mx-auto justify-center">
          <div className="font-bold text-6xl text-center mt-24 font-mono">
            Cooming Soon!
          </div>
          <div className="mx-auto w-full flex justify-center mt-16">
            <a
              href="/"
              className="mx-auto border-2 border-black px-4 py-2 text-large font-medium bg-black hover:bg-transparent hover:text-black text-white"
            >
              Home
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}
