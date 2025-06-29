import dev from "../../img/public/Portrait.png";
import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.home}>
      <div className={styles.homeImg}>
        <img src={dev} alt="image of me" />
      </div>
      <div className={styles.homeContent}>
        <h1>
          Hi, it's <span>Moundjid</span>
        </h1>
        <h3 className={styles.typingText}>I'm a Web Developer</h3>
        <p className={styles.aboutText}>
          A curious, self-taught developer, I transform lines of code into lines
          of code into concrete solutions. Whether it's applications, websites
          websites or innovative tools, I love taking on technical challenges
          challenges and bring to life projects that combine creativity and
          logic. When I'm not immersed in my IDE, you'll probably find me
          beating a boss on a video game, or chilling out during a decompressing
          sports session (badminton, rock-climbing or jogging), or exploring the
          latest trends in tech. For me, development is much more than a job:
          it's an infinite playground. I love experimenting, learning by doing
          and sharing my discoveries with the community. My goal? To create
          experiences that are useful, fluid and... a little bit surprising!
        </p>
        <div className={styles.socialIcons}>
          <a href="https://discord.gg/22HbQAqj" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://github.com/PxMach" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/PixelMach1">
            <i className="fa-brands fa-x"></i>
          </a>
        </div>
        <a
          href="CV – Moundjid Machghour.pdf"
          target="_blank"
          className={styles.btn}
        >
          Download CV {/* A changer cela doit être un lien vers le CV */}
        </a>
        {/* <a
          href="mailto:moundjidmachghour58@gmail.com?subject=Job%20Opportunity&body=Hello%2C%20I%27m%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you."
          target="_blank"
          className={styles.btn}
        >
          Hire me
        </a> */}
      </div>
    </section>
  );
}
