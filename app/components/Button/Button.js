'use client';

import { cn } from '../../utils/cn';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = styles.base;
  
  const variants = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
    ghost: styles.ghost
  };
  
  const sizes = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
    xl: styles.xl
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
