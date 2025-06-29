import styles from "./skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.sectionSkills}>
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <i className={`fa-brands fa-html5 ${styles.html5}`}></i>
          <h3>HTML/CSS</h3>
          <p>Elegant, responsive web page structures.</p>
        </div>
        <div className={styles.skill}>
          <i className={`fa-brands fa-js ${styles.js}`}></i>
          <h3>JavaScript</h3>
          <p>Development of interactive and dynamic functionalities.</p>
        </div>
        <div className={styles.skill}>
          <i className={`fa-solid fa-database ${styles.database}`}></i>
          <h3>MySQL</h3>
          <p>Efficient management of relational databases.</p>
        </div>
        <div className={styles.skill}>
          <i class="devicon-vitejs-plain colored"></i>
          <h3>Vitejs</h3>
          <p>Next-generation front-end tooling.</p>
        </div>
        <div className={styles.skill}>
          <i className={`fa-brands fa-react ${styles.react}`}></i>
          <h3>React</h3>
          <p>Building user interfaces with component-based architecture.</p>
        </div>
        <div className={styles.skill}>
          <i
            class={`devicon-tailwindcss-original colored ${styles.tailwindcss}`}
          ></i>
          <h3>Tailwind CSS</h3>
          <p>Utility-first CSS framework for rapid UI development.</p>
        </div>
      </div>
    </section>
  );
}
