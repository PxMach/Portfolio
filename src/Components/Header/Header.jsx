import React from "react";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header>
      <a href="#" className={styles.logo}>
        Machghour Moundjid
      </a>
      <nav>
        <ul>
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
      </nav>
    </header>
  );
}
