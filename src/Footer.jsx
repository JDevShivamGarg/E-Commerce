import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="bg-gray-600 py-7 px-10 flex justify-around items-center text-xs text-white w-full">
      <p>Copyright 2024 | JDevShivamGarg</p>
      <p>Powered by JDevShivamGarg</p>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;