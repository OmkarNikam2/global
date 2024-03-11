import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Landing from '@/components/landing/landing'
import Oldlanding from "@/components/landing/oldlanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>1 click global</title>
        <meta name="description" content="1click global" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
      {/* <Oldlanding/> */}
    </>
  );
}
