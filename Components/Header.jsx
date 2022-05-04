import Head from "next/head";

const Header = () => {
  return (
    <Head>
        <title>Sihirli Top</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Sihirli Top" />
        <meta name="keywords" content="Sihirli Top" />
        <meta name="author" content="UmutKDev" />
        <meta name="copyright" content="Sihirli Top" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Sihirli Top" />
        <meta property="og:description" content="Sihirli Top" />
        <meta property="og:image" content="/8ball.png" />
        <meta property="og:url" content="https://8ball.umutk.codes" />
        <meta property="og:site_name" content="Sihirli Top" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@UmutKDev" />
        <meta name="twitter:title" content="Sihirli Top" />
        <meta name="twitter:description" content="Sihirli Top" />
        <meta name="twitter:image" content="/8ball.png" />
    </Head>
  );
}

export default Header;