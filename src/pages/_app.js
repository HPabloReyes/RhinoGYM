import Head from "next/head";
import Navigation from "../components/navigation";
//import "../styles/styles.css";

export default function Layout({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title> Rhino GYM </title>
        {/* <link rel="icon" href="/icn.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css"
          integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navigation />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
