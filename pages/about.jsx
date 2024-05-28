import style from "../style/pages/about.module.css";
import FAQ from "../components/faq";
import Subscribe from "../components/subscribe";

function about() {
 
  return (
    <div className={style.aboutContainer}>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.headerTitle}>Who We Are</div>
          <div className={style.headerDesc}>
            We are a dedicated online shop committed to providing the highest
            quality products to our customers. Our mission is to help everyone
            easily find and purchase what they need, with a wide variety of
            choices and excellent customer service.
          </div>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.leftSec}>
          <div className={style.container}>
            <div className={style.mainTitle}>Our Vision</div>
            <div className={style.mainDesc}>
              To be the leading online retailer known for quality, variety, and
              customer satisfaction. We aim to continually improve and innovate
              to meet the needs and expectations of our customers.
            </div>
          </div>
        </div>
        <div className={style.rightSec}>
          <div className={style.alignText}>
            <div>
              Integrity, customer focus, and innovation are at the heart of
              everything we do. We believe in providing exceptional value and
              building long-term relationships with our customers.
            </div>
          </div>
        </div>

        <div className={style.shopcard}></div>
      </div>

      <div className={style.footer}>
        <div className={`${style.footerLeft}`}>
          <Subscribe />
        </div>

        <div className={style.footerRight}>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default about;
