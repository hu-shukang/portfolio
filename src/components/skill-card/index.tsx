import { forwardRef } from 'react';
import styles from './style.module.scss';
import { SkillCardProps } from '@/types/skill.type';

const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>((props, ref) => {
  return (
    <div ref={ref} className={`${styles.card} ${props.animation}`} style={{ '--ry': props.rotateY }}>
      <img src={props.img} alt={props.text} />
      <div className={styles.text}>{props.text}</div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
