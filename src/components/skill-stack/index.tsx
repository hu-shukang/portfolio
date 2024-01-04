import { useMemo } from 'react';
import styles from './style.module.scss';
import { skillData } from '@/types/skill.type';

type SkillCardProps = {
  index: number;
  rotateY: number;
  text: string;
  img: string;
};

const SkillCard = ({ text, img, rotateY }: SkillCardProps) => {
  return (
    <div className={styles.card} style={{ '--rotateY': rotateY }}>
      <img src={img} alt={text} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

const SkillStack = () => {
  const skillList = useMemo<SkillCardProps[]>(() => {
    return skillData.map((skill, index, arr) => ({ ...skill, index: index, rotateY: (index / arr.length) * 360 }));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.animation}>
        <div className={styles.skills}>
          <div className={styles.stack}>
            {skillList.map(skill => (
              <SkillCard key={skill.index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStack;
