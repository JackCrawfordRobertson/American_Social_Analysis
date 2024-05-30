import React from 'react';
import { FaLinkedin, FaGithub, FaLink, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>
        {/* Placeholder for the logo */}
        <img src="/White_Logo.svg" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.socialLinks}>
        <a href="https://written.jack-robertson.co.uk/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaHome />
        </a>
        <a href="https://Jack-robertson.co.uk" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLink />
        </a>
        <a href="https://linkedin.com/in/jackcrobertson" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/JackCrawfordRobertson" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#3496d3',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '3em',
    marginTop: '2em',
  },
  logo: {
    flex: '1',
  },
  logoImage: {
    height: '50px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'flex-end', // Align to the right
    alignItems: 'center',
    flex: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
    margin: '0 10px',
    textDecoration: 'none',
  },
};

export default Footer;
