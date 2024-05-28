import ContactUs from "../components/contactUs.jsx";
import style from "../style/pages/contact.module.css";
import Social from "../components/social.jsx";
function contact() {
  return (
    <div className={style.contactPageContainer}>
      <div className={style.contactTopContainer}>
        <div className={style.topDetailContainer}>
          <h1>
            It's very easy to connect now.<br></br>
            You can even send us a letter below
          </h1>
          <Social />
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default contact;
