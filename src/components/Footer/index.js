import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/laboettcher" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="linkedin.com" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://stackoverflow.com/" target="blank">
            <li>
              <FaStackOverflow />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;