import styles from './style.module.scss';

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="hushukang avatar" />
    </div>
  );
};

export default Avatar;
