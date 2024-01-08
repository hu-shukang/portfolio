import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>PORTFOLIO</h1>
          <h2>ポートフォリオ</h2>
        </div>
        <nav>
          <a
            className={styles.button}
            href="https://github.com/hu-shukang?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.preffix} src={`${import.meta.env.BASE_URL}images/github.svg`} alt="" />
            <span>github</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
