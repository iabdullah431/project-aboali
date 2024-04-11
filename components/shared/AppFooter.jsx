
import AppFooterCopyright from "./AppFooterCopyright";
import ContactDetails from '../../components/contact/ContactDetails';




function AppFooter() {
  return (
    <div className="container mx-auto">
<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
  <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
      <ContactDetails />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7216.430058024283!2d55.328278!3d25.263351!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE1JzQ4LjEiTiA1NcKwMTknNTEuMSJF!5e0!3m2!1sen!2sin!4v1712749261583!5m2!1sen!2sin"
        style={{ border: "0" }}
        allowfullscreen=""
        className="w-full sm:h-64 mt-10"
        loading="lazy"
      ></iframe>
    </div>

  </div>
  <AppFooterCopyright />

</div>
    </div>
  );
}

export default AppFooter;
