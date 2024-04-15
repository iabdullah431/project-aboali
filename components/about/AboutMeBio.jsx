import Image from "next/image";
import { useTranslation } from "react-i18next";


function AboutMeBio() {
  const { t } = useTranslation();

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 justify-center items-center flex sm:mb-0">
        <Image
          src="/images/caterpillar-cat-tekhnika.jpg"
          width={400}
          height={350}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-start">
        
          <div
            className="mb-4 flex flex-col  text-ternary-dark dark:text-ternary-light text-lg"
          >
            <span className="text-2xl font-bold">
            {t("LB0013")}
            </span>
            <span className=" text-lg"> {t("LB0014")}</span>
          </div>
        
          <div
            className="mb-4 flex flex-col  text-ternary-dark dark:text-ternary-light text-lg"
          >
            <span className="text-2xl font-bold">
            {t("LB0015")}
            </span>
            <span className=" text-lg"> {t("LB0016")}</span>
          </div>

          <div
            className="mb-4 flex flex-col  text-ternary-dark dark:text-ternary-light text-lg"
          >
            <span className="text-2xl font-bold">
            {t("LB0017")}
            </span>
            <span className=" text-lg"> {t("LB0018")}</span>
          </div>

          <div
            className="mb-4 flex flex-col  text-ternary-dark dark:text-ternary-light text-lg"
          >
            <span className="text-2xl font-bold">
            {t("LB0019")}
            </span>
            <span className=" text-lg"> {t("LB0020")}</span>
          </div>


      </div>

      
    </div>
  );
}

export default AboutMeBio;
