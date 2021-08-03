import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list-item">
          <a className="list-item-link" href="https://www.linkedin.com/in/yuliethzuluaga/" target="blank">
            Yulieth Zuluaga
          </a>
          </li>
        <li className="footer-list-item">
          <a className="list-item-link" href="https://github.com/yulyzulu" target="blank">
            Github
          </a>
        </li>
        <li className="footer-list-item">
          <a className="list-item-link" href="mailto:yulyzulu05@gmail.com" target="blank">
            Email
          </a>
        </li>

      </ul>
    </footer>
  );
};

export default Footer;
