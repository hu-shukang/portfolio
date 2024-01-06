import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './style.module.scss';
import useWindowSize from '@/hooks/window-size.hook';
import { SkillCardProps, initSkillCardProps } from '@/types/skill.type';
import SkillCard from '../skill-card';

const Skill = () => {
  const { height } = useWindowSize();
  const [delay, setDelay] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const animationRef = useRef<HTMLDivElement>(null!);
  const skillList = useRef<SkillCardProps[]>(initSkillCardProps());

  const maxDistance = useMemo(() => {
    return 1800 - height + 80;
  }, [height]);

  useEffect(() => {
    const scrollHandler = () => {
      if (wrapperRef.current && animationRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const animationRect = animationRef.current.getBoundingClientRect();
        const distanceToTop = animationRect.top - wrapperRect.top;
        const num = 0 - distanceToTop / maxDistance;
        setDelay(() => num);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [maxDistance]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div ref={animationRef} className={styles.animation} style={{ '--delay': `${delay}s` }}>
        <div className={styles.perspective}>
          <div className={styles.knowledge}>
            <img src={`${import.meta.env.BASE_URL}images/knowledge.png`} alt="knowledge" />
          </div>
          <div className={styles.scale}>
            <div className={styles.rotationX}>
              <div className={`${styles.task} ${styles.rotationY}`}>
                {skillList.current.map(skill => (
                  <SkillCard key={skill.index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;