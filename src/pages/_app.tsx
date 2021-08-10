import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  return (
    <>
      <Head>
        <title>XRP to the Moon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
