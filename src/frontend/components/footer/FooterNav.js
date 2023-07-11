import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export default function FooterNav() {
  return (
    <footer className="container bg-dark text-white">
      <p>
        &copy; 2023 Raiyana Jan Winata, Inc. &middot;{' '}
        <a href="https://wa.me/085604508535" className="text-white ms-1" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </p>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white me-2" size={20} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white" size={20} />
        </a>
      </div>
    </footer>
  );
}
