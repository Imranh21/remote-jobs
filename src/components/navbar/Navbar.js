import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navBG = () => {
    if (window.scrollY > 50) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  window.addEventListener("scroll", navBG);

  return (
    <nav className={showNav ? `${styles.show}` : `${styles.dontShow}`}>
      <div className={styles.navBar}>
        <a href="#">Remote Jobs</a>
      </div>
    </nav>
  );
};

export default Navbar;
