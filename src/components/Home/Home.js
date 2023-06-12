import React from 'react';
import classes from './Home.module.css';

const home = (props, sectionRefs) => {
    return (
        <section
            className={classes.home}
            id={props.sectionId}
            ref={(el) => (sectionRefs.current[0] = el)}
        >
            <div>
                <h1
                    className={`${classes['main-title']} ${classes['anim-typewriter']}`}
                >
                    EARTHLYZ9
                </h1>
                <p className={classes.title}>Web Portfolio</p>
            </div>
            <div className={classes.dict}>
                <h3>earthly</h3>
                <span>[urth-lee]</span>
                <blockquote>
                    to prioritize practical matters and the tangible aspects of
                    life rather than being overly concerned with abstract or
                    spiritual matters
                </blockquote>
            </div>
        </section>
    );
};

const Home = React.forwardRef(home);

export default Home;
