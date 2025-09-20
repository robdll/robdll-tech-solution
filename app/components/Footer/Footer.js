'use client';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Logo and Copyright */}
          <div className={styles.leftSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                {'{}'}
              </div>
              <div className={styles.logoText}>
                Rob DII Tech Solutions
              </div>
            </div>
            <span className={styles.copyright}>
              © 2024. All rights reserved.
            </span>
          </div>

          {/* Right side - Legal Links */}
          <div className={styles.rightSection}>
            <a
              href="#privacy"
              className={styles.legalLink}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className={styles.legalLink}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
