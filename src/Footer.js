import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', marginTop: '20px', textAlign: 'center' }}>
    <p>© {new Date().getFullYear()} Nick Huemmer. All rights reserved.</p>
  </footer>
);

export default Footer;
