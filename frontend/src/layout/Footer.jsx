import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Health Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
