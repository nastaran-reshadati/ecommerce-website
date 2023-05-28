import Header from "@/components/Header";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import "../public/global.css";
import { Provider } from "react-redux";
import { Store } from "@/redux/Store";

const globalFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });
export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <div className={globalFont.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
