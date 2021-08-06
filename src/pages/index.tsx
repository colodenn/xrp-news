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
        <MainContent />
      </Layout>
    </>
  );
}
