import classes from './SkillCard.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';

const SkillCard = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [iconSize, setIconSize] = useState(70);
    const Icon = props.element;
    const hoverAction = false;

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
                <p className={classes['icon-tag']}>{props.name}</p>
            </div>
        </Card>
    );
};

export default SkillCard;
