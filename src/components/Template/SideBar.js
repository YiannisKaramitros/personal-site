import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
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
      <p>Hi, I&apos;m Yiannis. I am a <a href="https://engineering.lehigh.edu/cse">Lehigh CSE </a>
        (Computer Science Engineering) Student, currently in my senior year. I have a minor in
        Economics, and I am interested in Blockchain and Algorithms participating in a research
        group at Lehigh <a href="https://wordpress.lehigh.edu/sss/">SSS</a> (Scalable Systems & Software).
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yiannis Karamitros <Link to="/">yianniskaramitros.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
