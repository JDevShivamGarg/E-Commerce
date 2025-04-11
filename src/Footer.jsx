import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="bg-gray-600 py-7 px-10 flex justify-around items-center text-xs text-white w-full">
      <p>Copyright 2022 | CodeYogi</p>
      <p>Powered by CodeYogi</p>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;