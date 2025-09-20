'use client';

import Button from '../Button/Button';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Content */}
          <div className={styles.textContent}>
            <h1 className={styles.headline}>
              Web Software that{' '}
              <span className={styles.highlight}>Moves Your Business Forward</span>
            </h1>
            
            <p className={styles.description}>
              Accelerate your business with custom web solutions. We specialize in rapid development, 
              seamless integrations, and reliable systems that drive growth.
            </p>
            
            <div className={styles.buttonGroup}>
              <Button size="lg" className={styles.primaryButton}>
                Book a consultation
              </Button>
              <Button variant="secondary" size="lg" className={styles.secondaryButton}>
                See case studies
              </Button>
            </div>
          </div>
          
          {/* Right side - Placeholder Image */}
          <div className={styles.imageContainer}>
            <div className={styles.placeholderImage}>
              <div className={styles.placeholderContent}>
                <div className={styles.placeholderIcon}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className={styles.placeholderText}>Hero Image Placeholder</p>
                <p className={styles.placeholderSubtext}>Your visual content will go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
