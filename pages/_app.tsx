import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const nowRoute = useRouter();
  console.log(nowRoute.asPath);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp)
