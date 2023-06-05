import styles from './Card.module.css';
import React from 'react';

const Card = (props) => {
    return (
        <div
            onMouseEnter={() =>
                props.hasHoverAction && props.mouseHandler(true)
            }
            onMouseLeave={() =>
                props.hasHoverAction && props.mouseHandler(false)
            }
            className={`${styles.card} ${props.className && props.className}`}
            style={{
                width: props.width,
                height: props.height,
                // maxHeight: props.maxHeight ? props.maxHeight : 'fit-content',
                maxWidth: props.maxWidth ? props.maxWidth : '95%',
            }}
        >
            {props.children}
        </div>
    );
};

export default Card;
