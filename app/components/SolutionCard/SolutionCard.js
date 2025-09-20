'use client';

import styles from './SolutionCard.module.css';

const SolutionCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* Icon */}
        <div className={styles.iconContainer}>
          {icon}
        </div>
        
        {/* Title */}
        <h3 className={styles.title}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
