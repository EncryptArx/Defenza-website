import React from 'react';

// IMPORTANT: Replace the placeholder below with the actual Base64 encoded string of your phoenix logo image.
// For example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAACcadsQAA....'
const logoPath = '/assets/images/logo.png'; // Path to the logo in the public/assets/images directory

export const DefenzaLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { className, style, alt = "Defenza Logo", ...rest } = props;
  return (
    <img
      src={logoPath}
      alt={alt}
      className={`${className} object-contain`} // Added object-contain
      style={style}
      {...rest}
    />
  );
};
