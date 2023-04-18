import styles from "@/styles/Footer.module.css";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.cc}>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          rel="noreferrer"
          target="_blank"
        >
          CC BY-NC-SA 4.0
        </a>{" "}
        <GithubOutlined />{" "}
        <a
          href="https://github.com/Liziming726"
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Ziming Li 
        </a>
      </p>
      <a href="https://www.seniverse.com/" rel="noreferrer" target="_blank">
        Powered by Next.js & seniverse
      </a>
    </div>
  );
};

export default Footer;
