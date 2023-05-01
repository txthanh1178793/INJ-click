import Layout from "@/components/Layout";
// import ContextProvider from "@/context/ContextProvider";
import PredictContextProvider from "@/context/PredictContextProvider";
import WalletContextProvider from "@/context/WalletContextProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <PredictContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PredictContextProvider>
    </WalletContextProvider>
  );
}
