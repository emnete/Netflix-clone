import React, { useEffect, useState } from "react";
import "../NavBar/Nav.css";

function Nav() {
  const [backgroundShow, setbackgroundShow] = useState(false);

  useEffect(() => {
    window. addEventListener("scroll", () => {
      if (window.scrollY > 160) {
        setbackgroundShow(true);
      } else setbackgroundShow(false);
    });
    return () => {
      window. removeEventListener("scroll", setbackgroundShow);
    };
  }, []);

  // {`nav ${show && "nav_scroller"}`}

  return (
    <div className={`nav ${backgroundShow && "nav__scroller"}`}>
      <img
        className="netflixLogo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Netflix Logo"
      />

      <img
        className="netflixAvatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Avatar logo"
      />
    </div>
  );
}

export default Nav;
