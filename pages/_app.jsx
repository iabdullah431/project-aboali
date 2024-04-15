import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";
import i18n from '../components/i18n'; 
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps }) {
  
const {i18n}=useTranslation()
  
  return (
    <AnimatePresence>
      <div
      dir={i18n.language=="ar"?"rtl":"ltr"}
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
