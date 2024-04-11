import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";
import i18n from '../components/i18n'; 

function MyApp({ Component, pageProps }) {
  

  
  return (
    <AnimatePresence>
      <div
	  className="   transition duration-300"
      >
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
