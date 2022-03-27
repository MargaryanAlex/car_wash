import React from "react";
import logo from "src/resource/img/logoBW.svg";
import phone from "src/resource/icons/phone.svg";
import "../footer/style/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row top">
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="right">
          <div className="number">
            <p>Աջակցության գիծ</p>
            <span >
              <img src={phone} alt="phoneIcon" /> 044 55 66 77
            </span>
          </div>
          <div className="about">
            <p>Ծառայություններ</p>
            <p>Մեր մասին</p>
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="row bottom">
        <div className=" copyLeft">
          <div>
            By signing up you are agreeing to get mails and updates. You may
            unsubscribe at any time.
          </div>
        </div>
        <div className=" copyRight">
          <div>
            © 2021 Company LLP. All Rights Reserved. Privacy Policy Legal Notice
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
