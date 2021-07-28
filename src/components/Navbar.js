import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated, config } from "react-spring";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let mobileMenu;

  const hiddenBurgerStyle = {
    position: "fixed",
    backgroundColor: "#058dd1",
    top: "0",
    left: "0",
    width: "80%",
    height: "100%",
    zIndex: "50",
    boxShadow: "12px 0px 100px black",
    paddingTop: "7em",
  };

  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const transitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(+100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(+100%)" },
  });

  // if (showMenu) {
  //   mobileMenu = (
  //     <div className="hamburger-menu">
  //       <li className="nav-list">
  //         <a href="index.html">About</a>
  //       </li>
  //       <li className="nav-list">
  //         <a href="about-me.html">Services</a>
  //       </li>
  //       <li className="nav-list">
  //         <a href="recent-posts.html">Projects</a>
  //       </li>
  //     </div>
  //   );
  // }

  return (
    <nav>
      <ul>
        <span>
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </span>
        {maskTransitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="hamburger-menu-mask"
                onClick={() => setShowMenu(false)}
              ></animated.div>
            )
        )}
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles} className="hamburger-menu">
                <li className="nav-list">
                  <a href="index.html">About</a>
                </li>
                <li className="nav-list">
                  <a href="about-me.html">Services</a>
                </li>
                <li className="nav-list">
                  <a href="recent-posts.html">Projects</a>
                </li>
                <li className="nav-list ">
                  <div className="btn">
                    <a href="recent-posts.html btn">CONTACT</a>
                  </div>
                </li>
              </animated.div>
            )
        )}
        <li className="nav-list-hidden">
          <a href="index.html" className="current-page">
            About
          </a>
        </li>
        <li className="nav-list-hidden">
          <a href="about-me.html">Services</a>
        </li>
        <li className="nav-list-hidden">
          <a href="recent-posts.html">Projects</a>
        </li>
        <li className="nav-list-hidden btn">
          <a href="recent-posts.html">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
