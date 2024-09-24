import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faFileContract, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={columnStyle}>
                <h4>Links</h4>
                <div style={linkContainerStyle}>
                    <a href="/privacy" style={footerLinkStyle}>
                        <FontAwesomeIcon icon={faLock} style={iconStyle} /> Privacy Policy
                    </a>
                    <a href="/terms" style={footerLinkStyle}>
                        <FontAwesomeIcon icon={faFileContract} style={iconStyle} /> Terms of Service
                    </a>
                    <a href="/faq" style={footerLinkStyle}>
                        <FontAwesomeIcon icon={faQuestionCircle} style={iconStyle} /> FAQs
                    </a>
                </div>
            </div>

            <div style={columnStyle}>
                <h4>Social Media</h4>
                <div style={linkContainerStyle}>
                    <a href="https://www.twitter.com" style={footerLinkStyle}>
                        <FontAwesomeIcon icon={faTwitter} style={iconStyle} /> Twitter
                    </a>
                    <a href="https://www.linkedin.com" style={footerLinkStyle}>
                        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} /> LinkedIn
                    </a>
                    <a href="https://www.facebook.com" style={footerLinkStyle}>
                        <FontAwesomeIcon icon={faFacebook} style={iconStyle} /> Facebook
                    </a>
                </div>
            </div>

            <div style={columnStyle}>
                <h4>Contact Us</h4>
                <p>Email: support@drugtrack.com</p>
                <p>Phone: +1 (234) 567-890</p>
            </div>

            <div style={columnStyle}>
                <h4>About Us</h4>
                <p>Learn more about our mission and values.</p>
            </div> <br></br>

            
        </footer>
    );
}

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#1f2937',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '50px',
    flexWrap: 'wrap', // Ensure responsiveness
};

const columnStyle = {
    flex: '1',
    margin: '10px',
    minWidth: '200px', // Set a minimum width for columns
};

const linkContainerStyle = {
    marginBottom: '15px',
};

const footerLinkStyle = {
    color: '#ffffff',
    marginRight: '20px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
};

const iconStyle = {
    marginRight: '8px', // Spacing between icon and text
};
