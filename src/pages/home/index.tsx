import Header from '@/components/header';
import styles from './style.module.scss';
import Profile from '@/components/profile';
import Skill from '@/components/skill';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.title}>プロフィール</div>
        <Profile />
        <div className={`${styles.title} ${styles.mt}`}>技術スタック</div>
        <Skill />
        <div className={`${styles.title} ${styles.mt}`}>連絡先</div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
