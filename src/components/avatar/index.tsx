import AcatarImg from '@/assets/images/avatar.png';
import styles from './style.module.scss';

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src={AcatarImg} alt="hushukang avatar" />
    </div>
  );
};

export default Avatar;
