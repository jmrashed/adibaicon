import React from 'react';

const AdibaIcon = ({ 
  icon, 
  size = 'md', 
  color, 
  className = '', 
  ...props 
}) => {
  const baseClass = `adiba-${icon}`;
  const sizeClass = size ? `adiba-${size}` : '';
  const colorClass = color ? `adiba-${color}` : '';
  
  const classes = [baseClass, sizeClass, colorClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <i 
      className={classes}
      role="img"
      aria-label={`${icon} icon`}
      {...props}
    />
  );
};

export default AdibaIcon;