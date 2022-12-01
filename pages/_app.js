import "../styles/index.css";
import "@fontsource/heebo/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
