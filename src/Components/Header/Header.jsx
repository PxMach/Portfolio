import React from "react";
import styles from "./header.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleClickOpen() {
    setShowMenu(() => {
      setShowMenu(true);
    });
  }

  function handleClickClose() {
    setShowMenu(() => {
      setShowMenu(false);
    });
  }

  return (
    <header>
      <a href="#" className={styles.logo}>
        Machghour Moundjid
      </a>
      <nav>
        <div>
          <i
            onClick={handleClickOpen}
            className={`fa-solid fa-bars ${styles.bars} 
            ${showMenu ? styles.hiddeBars : ""}`}
          ></i>
        </div>

        {/* {showMenu && ( */}
        <ul className={showMenu ? styles.showMenu : ""}>
          <i
            onClick={handleClickClose}
            className={`fa-solid fa-xmark ${styles.close}`}
          ></i>
          <li>
            <a href="#about" className={styles.active}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* )} */}
      </nav>
    </header>
  );
}
