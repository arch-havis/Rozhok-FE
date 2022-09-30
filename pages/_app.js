import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Script from "next/script";
import "../styles/globals.css";
import "../styles/scss/bootstrap.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      />
      <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      />
      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
