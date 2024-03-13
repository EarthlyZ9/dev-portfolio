import styles from './Card.module.css';
import React from 'react';

const Card = (props) => {
    return (
        <div
            className={`${styles.card} ${props.className && props.className}`}
            style={{
                width: props.width,
                height: props.height,
                maxWidth: props.maxWidth ? props.maxWidth : '95%',
            }}
        >
            {props.children}
        </div>
    );
};

export default Card;
