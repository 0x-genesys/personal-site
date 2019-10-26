import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Karan Ahuja</h2>
        <p><a href="mailto:karan.ahuja2014@gmail.com">karan.ahuja2014@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Karan. I like building products.
            I am a <a href="https://manipal.edu/mit.html">Manipal Institute of Technology</a> graduate, MIT Alumni, and
            currently tech lead at <a href="https://springrole.com">Springrole</a>. Before Springrole I was
            at Blockwala (founder), <a href="https://urbanclap.com">Urbanclap</a>, <a href="https://payumoney.com">Pay U Money</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Karan Ahuja <Link to="/">karanahuja.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
