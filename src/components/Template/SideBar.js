import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const handleDownloadResume = () => {
    const fileUrl = `${PUBLIC_URL}/resumes/ykaramitros_resume.pdf`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ykaramitros_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Yiannis Karamitros</h2>
          <p><a href="mailto:yiannis.karamitros0817@gmail.com">yiannis.karamitros0817@gmail.com</a></p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Yiannis! I am a <a href="https://engineering.lehigh.edu/cse">CSE Major </a>
          (Computer Science Engineering) at Lehigh University, currently in my senior year. I have
          a minor in Economics. I am specifically interested in Blockchain and Algorithms
          participating in a research group at Lehigh called <a href="https://wordpress.lehigh.edu/sss/">SSS </a>
          (Scalable Systems & Software). Where I study the hierarchial consensus
          of Central Bank Digital Currencies.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
          <li>
            <button type="button" className="button" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Yiannis Karamitros <Link to="/">yianniskaramitros.com</Link>.</p>
      </section>
    </section>
  );
};

export default SideBar;
