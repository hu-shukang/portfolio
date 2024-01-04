import { useCallback, useState } from 'react';
import styles from './style.module.scss';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItemClickHandler: React.MouseEventHandler<HTMLSpanElement> = useCallback(e => {
    const newIndex = Number.parseInt(e.currentTarget.dataset.index ?? '0', 10);
    setActiveIndex(() => newIndex);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>PORTFOLIO</h1>
          <h2>ポートフォリオ</h2>
        </div>
        <nav style={{ '--active': activeIndex }}>
          <span data-index={0} onClick={menuItemClickHandler}>
            プロフィール
          </span>
          <span data-index={1} onClick={menuItemClickHandler}>
            技術スタック
          </span>
          <span data-index={2} onClick={menuItemClickHandler}>
            連絡先
          </span>
          <div className={styles.slider}></div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
