import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <a href="/">
        <h1 className="logo">🎧 Kordz</h1>
      </a>
      <button
        className="toggle-btn"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        {libraryStatus ? (
          "Close"
        ) : (
          <>
            Library
            <FontAwesomeIcon icon={faMusic} />
          </>
        )}
      </button>
    </nav>
  );
};

export default Nav;
