import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="wrapper home-default-wrapper">
          <Header classOption="hb-border" />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
