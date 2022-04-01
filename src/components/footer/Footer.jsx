import React from "react";
import logo from "src/resource/img/logoBW.svg";
import phone from "src/resource/icons/phone.svg";
import style from "./style/footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.row + " " + style.top}>
        <div className={style.left}>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.right}>
          <div className={style.number}>
            <p>Աջակցության գիծ</p>
            <span>
              <img src={phone} alt="phoneIcon" /> 044 55 66 77
            </span>
          </div>
          <div className={style.about}>
            <p>Ծառայություններ</p>
            <p>Մեր մասին</p>
          </div>
        </div>
      </div>
      <div className={style.line} />
      <div className={style.row + " " + style.bottom}>
        <div className={style.copyLeft}>
          <div>
            By signing up you are agreeing to get mails and updates. You may
            unsubscribe at any time.
          </div>
        </div>
        <div className={style.copyRight}>
          <div>
            © 2021 Company LLP. All Rights Reserved. Privacy Policy Legal Notice
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
