'use client';

import styles from './TrustedCompanies.module.css';

const TrustedCompanies = () => {
  const companies = [
    {
      name: "Company 1",
      logo: (
        <div className={styles.companyLogo}>
          <div className={styles.logoInner}></div>
        </div>
      )
    },
    {
      name: "Company 2", 
      logo: (
        <div className={styles.companyLogo}>
          <div className={styles.logoInner}></div>
        </div>
      )
    },
    {
      name: "Company 3",
      logo: (
        <div className={styles.companyLogo}>
          <div className={styles.logoInner}></div>
        </div>
      )
    },
    {
      name: "Company 4",
      logo: (
        <div className={styles.companyLogo}>
          <div className={styles.logoInner}></div>
        </div>
      )
    },
    {
      name: "Company 5",
      logo: (
        <div className={styles.companyLogo}>
          <div className={styles.logoInner}></div>
        </div>
      )
    },
    {
      name: "Company 6",
      logo: (
        <div className={styles.companyLogo}>
          <div className={styles.logoInner}></div>
        </div>
      )
    }
  ];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Trusted by Leading Companies
          </h2>
        </div>

        {/* Company Logos */}
        <div className={styles.logoGrid}>
          {companies.map((company, index) => (
            <div
              key={index}
              className={styles.logoContainer}
              title={company.name}
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
