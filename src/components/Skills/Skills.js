import React from 'react';
import classes from './Skills.module.css';
import Title from '../UI/Title';
import SkillCard from './SkillCard';
import skillData from '../../data/skillData';

const skills = (props, ref) => {
    const mainSkills = [];
    const communications = [];
    const deploy = [];
    skillData.forEach((value) => {
        switch (value.tags) {
            case 'Backend':
                mainSkills.push(value);
                break;
            case 'Deployment':
            case 'Version Control':
                deploy.push(value);
                break;
            case 'Communications':
                communications.push(value);
        }
    });

    return (
        <section
            className={classes.skills}
            id={props.sectionId}
            ref={(el) => (ref.current[2] = el)}
        >
            <Title title={'Skills'} />
            <div className={classes['text-divider']}>Backend</div>
            <div className={classes['skill-container']}>
                {mainSkills.map((el, idx) => (
                    <SkillCard
                        key={idx}
                        name={el.name}
                        color={el.color}
                        element={el.iconEl}
                        description={el.description}
                        tags={el.tags}
                    />
                ))}
            </div>
            <div className={classes['text-divider']}>Deployment & Version Control</div>
            <div className={classes['skill-container']}>
                {deploy.map((el, idx) => (
                    <SkillCard
                        key={idx}
                        name={el.name}
                        color={el.color}
                        element={el.iconEl}
                        description={el.description}
                        tags={el.tags}
                    />
                ))}
            </div>
            <div className={classes['text-divider']}>Communications</div>
            <div className={classes['skill-container']}>
                {communications.map((el, idx) => (
                    <SkillCard
                        key={idx}
                        name={el.name}
                        color={el.color}
                        element={el.iconEl}
                        description={el.description}
                        tags={el.tags}
                    />
                ))}
            </div>
        </section>
    );
};

const Skills = React.forwardRef(skills);
export default Skills;
