import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.cc}>
        <a
          href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
          rel='noreferrer'
          target='_blank'
        >
          CC BY-NC-SA 4.0
        </a>{' '}
        © Ziming Li
      </p>
      <a href='https://www.seniverse.com/' rel='noreferrer' target='_blank'>
        Powered by Next.js{' '}&{' '}seniverse
      </a>
    </div>
  );
};

export default Footer;
