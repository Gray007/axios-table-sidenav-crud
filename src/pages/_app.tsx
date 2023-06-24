import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/componenets/Layout";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
