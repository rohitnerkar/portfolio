import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaWhatsapp, } from "react-icons/fa";
import "./styles.scss";

function Footer() {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container__footer-content">
            <div className="footer__container__footer-content__social-icons">
              <p>Follow Me: </p>
                <FaTwitter size={24} />
                <FaInstagram size={24} />
                <FaFacebook size={24} />
                <FaWhatsapp size={24} />
            </div>
            <div className="footer__container__footer-content__contact">
                <p>
                    Contact:{" "}
                    <a href="mailto:rohitnerkar1997@gmail.com">
                        rohitnerkar1997@gmail.com
                    </a>
                </p>
            </div>
          </div>
          <div className="footer__container__footer-text">
                <p>&copy; 2024 Portfolio. All rights reserved.</p>
                <p>Designed and Built by Rohit Nerkar</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

