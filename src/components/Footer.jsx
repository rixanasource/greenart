import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer font-poppins'>

      <div className='footer-container'>
        <p className="text-slate-500">
          © {currentYear} <strong>Green Art</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link className={'text-green-500'} key={link.name} to={link.link} target='_blank'>
              <i className={link.icon}></i>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
