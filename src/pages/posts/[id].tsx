import Footer from "../../../components/layout/footer";
import Header from "../../../components/layout/header";
import Layout from "../../../components/layout/layout";
import LayoutHeader from "../../../components/layout/layoutHeader";
import Post from "../../../components/posts/post";

export default function Posts() {
  return (
    <>
      <div id="app">
        <Header />
        <Layout>
          <LayoutHeader />
          <Post />
          <Footer />
        </Layout>
      </div>
    </>
  );
}
