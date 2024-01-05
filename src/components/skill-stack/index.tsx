import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './style.module.scss';
import { skillData } from '@/types/skill.type';
import useWindowSize from '@/hooks/window-size.hook';

type SkillCardProps = {
  index: number;
  rotateY: number;
  text: string;
  img: string;
};

const SkillCard = ({ index, text, img, rotateY }: SkillCardProps) => {
  return (
    <div className={styles.card} style={{ '--rotateY': rotateY, '--index': index }}>
      <img src={img} alt={text} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

const SkillStack = () => {
  const { height } = useWindowSize();
  const [delay, setDelay] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const animationRef = useRef<HTMLDivElement>(null!);
  const maxDistance = useMemo(() => {
    return 1800 - height + 80;
  }, [height]);
  const skillList = useMemo<SkillCardProps[]>(() => {
    return skillData.map((skill, index, arr) => ({ ...skill, index: index, rotateY: (index / arr.length) * 360 }));
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (wrapperRef.current && animationRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const animationRect = animationRef.current.getBoundingClientRect();
        const distanceToTop = animationRect.top - wrapperRect.top;
        console.log(`${distanceToTop}, ${maxDistance}`);
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
        <div className={styles.row}>
          <img className={styles.knowledge} src={`${import.meta.env.BASE_URL}images/knowledge.png`} alt="knowledge" />
          <div className={styles.skills}>
            <div className={styles.stack}>
              {skillList.map(skill => (
                <SkillCard key={skill.index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStack;
