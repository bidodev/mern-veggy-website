import React from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';

/* Styles */
import './Footer.styles.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__box">
        <p className="footer__box__title">Contact Us</p>
        <div className="footer__box__container">
          <div className="footer__box__container__social-media">
            <p>
              <LogoFacebook fontSize="30px" color="#3b5998" />
              Facebook
            </p>
            <p>
              <IosMailOutline fontSize="30px" color="#1e5b45" />
              Mail Us
            </p>
          </div>
          <div className="footer__box__container__placeholder">
            <p>FreshVeggies Str, no.20, Brandenburg, Germany </p>
            <p>+49 01522 3044584 </p>
          </div>
        </div>
        <p className="landing-page__footer__credits">
          Made with
          <span role="img" aria-label="hearth-emoji">
            ❤️
          </span>
          in Berlin by Bido, Simona and Kevin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
