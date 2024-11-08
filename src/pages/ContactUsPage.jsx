import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import AboutUs from "../components/ui/AboutUs";
import Brands from "../components/ui/Brands";
import ContactUs from "../components/ui/ContactUsForm";
import GrowBusiness from "../components/ui/GrowBusiness";
import Office from "../components/ui/Office";



function ContactUsPage() {
  return (
    <>
      <Header />
      <ContactUs />
      <Office/>
      <AboutUs/>
      <Brands/>
      <GrowBusiness/>
      <Footer/>
    </>
  );
}

export default ContactUsPage;
