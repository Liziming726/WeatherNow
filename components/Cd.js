import Link from 'next/link';
import styles from '../styles/Cd.module.css';

const Cd = () => {
  return (
    <div className={styles.cd}>
      <Link href='/'>
        <span className={styles.link}>cd..</span>
      </Link>
    </div>
  );
};

export default Cd;
