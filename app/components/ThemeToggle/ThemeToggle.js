'use client';

import { useTheme } from '../../contexts/ThemeContext';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className={styles.icon} />
      ) : (
        <SunIcon className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeToggle;
