import Head from 'next/head';
import '../styles/globals.css'; // Import global CSS here

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Essential metadata tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Analysing social media usage in the context of university protests." />
        <meta name="keywords" content="social media, university protests, Snapchat, Instagram, Facebook, LinkedIn, household income, religious orientation, device type, university trends" />

        <link rel="icon" href="/logo.svg" />
      
        <meta property="og:title" content="Social Media Usage in University Protests" />
        <meta property="og:description" content="Analyzing social media usage in the context of university protests." />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://university-protests.jack-robertson.co.uk" />

        <meta property="og:type" content="article" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
