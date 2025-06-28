import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.sectionProjects}>
      <h2>Mes Projets</h2>
      <div className={styles.projectList}>
        <div className={styles.projectItem}>
          <h3>
            <a
              href="https://pxmach.github.io/Frontend-Mentor-Newsletter-sign-up-form-with-success-message/"
              target="_blank"
            >
              Newsletter sign-up form with success message
            </a>
          </h3>
          <p>
            A project that displays a newsletter sign-up form with a success
            message upon submission.
          </p>
          <span>Technologies used : HTML, CSS, JavaScript</span>
        </div>
        <div className={styles.projectItem}>
          <h3>
            <a
              href="https://pxmach.github.io/Frontend-Mentor-Loopstudios-landing-page/"
              target="_blank"
            >
              Loopstudios landing page
            </a>
          </h3>
          <p>
            A responsive landing page for Loopstudios showcasing their services
            and projects.
          </p>
          <span>Technologies used : HTML, CSS, JavaScript</span>
        </div>
        <div className={styles.projectItem}>
          <h3>
            <a
              href="https://pxmach.github.io/Frontend-Mentor-Bookmark-landing-page/"
              target="_blank"
            >
              Bookmark landing page
            </a>
          </h3>
          <p>
            A bookmark landing page to save and manage your favorite websites.
          </p>
          <span>Technologies used : HTML, CSS, JavaScript</span>
        </div>
        <div className={styles.projectItem}>
          <h3>
            <a
              href="https://pxmach.github.io/Frontend-Mentor-Tip-calculator-app/"
              target="_blank"
            >
              Tip calculator app
            </a>
          </h3>
          <p>
            A tip calculator app to help users calculate the appropriate tip
            amount based on the bill total and desired tip percentage.
          </p>
          <span>Technologies used : HTML, CSS, JavaScript</span>
        </div>
        <div className={styles.projectItem}>
          <h3>
            <a
              href="https://pxmach.github.io/Frontend-Mentor-E-commerce-product-page/"
              target="_blank"
            >
              E-commerce product page
            </a>
          </h3>
          <p>
            A product page for an e-commerce website showcasing a specific item
            with images, descriptions, and purchase options.
          </p>
          <span>Technologies used : HTML, CSS, JavaScript</span>
        </div>
        <div className={styles.projectItem}>
          <h3>
            <a href="#" target="_blank">
              Product list with cart
            </a>
          </h3>
          <p>
            A simple application to display a list of products with the ability
            to add them to a shopping cart.
          </p>
          <span>
            Technologies used : HTML, CSS, JavaScript{" "}
            <code>(React) !not finished yet</code>
          </span>
        </div>
      </div>
    </section>
  );
}
