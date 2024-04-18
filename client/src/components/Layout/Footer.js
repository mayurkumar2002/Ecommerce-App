// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <h2 className="text-center">All Rights Reserved &copy; mayurkumar</h2>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Footer.css';
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">HARVEST HAVEN</h1>
                    <p>
                        Harvest Haven is your one-stop shop for all your eco-friendly and sustainable products.
                    </p>
                    
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
                        <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
                        <li><Link to="/policy" onClick={scrollToTop}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" style={{ color: 'black' }} />
                        <textarea rows="4" name="message" className="text-input contact-input"  placeholder="Your message" style={{ color: 'black' }}></textarea>
                        <button type="submit" className="btn1 btn-primary">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HARVEST HAVEN. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;