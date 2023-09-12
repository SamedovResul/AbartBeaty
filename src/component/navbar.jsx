import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link, Element } from "react-scroll";
import ScrollTriger from 'react-scroll-trigger'
import logoimg from './img/abart.png'
import logotxt from  './img/logotxt.png'

const Navbar = ({ Boolean }) => {
  const { boolean, setboolean } = Boolean;

  return (
    <section className="nav-section" >
      <div className="logo" >
        <img src={logoimg} alt="melek" />
        <img src={logotxt} alt="melek" />
      </div>
      <ul>
        <li> <a href="#contact">Əlaqə</a>  </li>
        <li> <a href="#service">Xidmətlər</a></li>
      </ul>
    </section>
  );
};

export default Navbar;
