import Header from '@/components/header';
import styles from './style.module.scss';
import Profile from '@/components/profile';
import Skill from '@/components/skill';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.title}>プロフィール</div>
      <Profile />
      <div className={`${styles.title} ${styles.mt}`}>技術スタック</div>
      {/* <SkillStack /> */}
      <Skill />
    </div>
  );
};

export default Home;
