import './Footer.css';
import appStore from '../images/appStore.png'
import playStore from '../images/playStore.png'


const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>
      <div className="midFooter">
        <h1>smartEvent</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2024 &copy; Dina Baluashvili & Amit Cohen</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/">Instagram</a>
        <a href="https://youtube.com/">Youtube</a>
        <a href="https://facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
