'use client';

import { cn } from '../../utils/cn';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              {'{}'}
            </div>
            <span className={styles.logoText}>
              Rob Dll Tech Solutions
            </span>
          </div>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side - Theme toggle and CTA */}
          <div className={styles.rightSection}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
