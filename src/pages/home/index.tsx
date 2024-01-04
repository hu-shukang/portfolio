import Header from '@/components/header';
import styles from './style.module.scss';
import Profile from '@/components/profile';
import SkillStack from '@/components/skill-stack';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.title}>プロフィール</div>
      <Profile />
      <div className={`${styles.title} ${styles.mt}`}>技術スタック</div>
      <SkillStack />
    </div>
  );
};

export default Home;
