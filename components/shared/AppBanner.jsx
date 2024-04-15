import { motion } from "framer-motion";
import Image from 'next/image'; 

import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { useTranslation } from "react-i18next";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-start">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-start text-ternary-dark dark:text-primary-light uppercase"
        >
          {t("LB0003")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4   text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-start leading-normal text-gray-500 dark:text-gray-200"
        >
          {t("LB0004")}
          <br />
          <span className="opacity-60 text-base"> {t("LB0005")}</span>
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
<Image
  src="/images/caterpillar-cat-tekhnika.jpg" 
  width={500}
  height={500}
  className="ms-2"
  alt="Developer" 
/>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
``