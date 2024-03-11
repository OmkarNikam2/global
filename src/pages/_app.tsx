import "@/styles/globals.css";
import '../components/landing/style.css'
import '../components/landing/oldstyle.css'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
