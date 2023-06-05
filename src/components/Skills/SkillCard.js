import classes from './SkillCard.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';

const SkillCard = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [iconSize, setIconSize] = useState(70);
    const Icon = props.element;
    const descList = props.description.split('#');
    const hoverAction = props.tags === 'Backend' || props.tags === 'Frontend';

    useEffect(() => {
        if (isHover) setIconSize(40);
        else setIconSize(70);
    }, [isHover]);

    return (
        <Card
            width={'250px'}
            height={'250px'}
            hasHoverAction={hoverAction}
            mouseHandler={setIsHover}
            className={hoverAction && classes.cursor}
        >
            <div
                className={`${
                    isHover
                        ? classes['icon-container-hover']
                        : classes['icon-container']
                }`}
            >
                <Icon
                    size={iconSize}
                    color={props.color}
                    style={{ margin: '20px 0 10px 0' }}
                />
                {!isHover ? (
                    <p className={classes['icon-tag']}>{props.name}</p>
                ) : (
                    <h3 className={classes['icon-tag-hover']}>{props.name}</h3>
                )}
            </div>
            {isHover && (
                <div className={classes.description}>
                    {descList.map((value, idx) => (
                        <div key={idx} className={classes['desc-item']}>
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
};

export default SkillCard;
