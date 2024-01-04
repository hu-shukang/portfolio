import Avatar from '@/components/avatar';
import styles from './style.module.scss';

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <div className={styles.profile}>
        <section>
          <h3>名前</h3>
          <p>胡&nbsp;&nbsp;&nbsp;&nbsp;書康（コ&nbsp;&nbsp;&nbsp;&nbsp;ショコウ）</p>
        </section>
        <section>
          <h3>性別</h3>
          <p>男</p>
        </section>
        <section>
          <h3>年齢</h3>
          <p>1990年生まれ</p>
        </section>
        <section>
          <h3>職業</h3>
          <p>システムエンジニア</p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
