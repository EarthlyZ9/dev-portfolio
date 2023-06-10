import React, { useMemo } from 'react';
import classes from './Projects.module.css';
import Title from '../UI/Title';
import ProjectsTimeline from './ProjectsTimeline';
import projectData from '../../data/projectData';

const projects = (props, ref) => {
    const projects = useMemo(() => {
        return projectData.sort(function (a, b) {
            if (a.date > b.date) {
                return -1;
            } else if (a.date < b.date) {
                return 1;
            } else {
                return 0;
            }
        });
    }, []);

    return (
        <section
            className={classes.projects}
            id={props.sectionId}
            ref={(el) => (ref.current[3] = el)}
        >
            <Title title={'Projects'} />
            <ProjectsTimeline projects={projects} />
        </section>
    );
};

const Projects = React.forwardRef(projects);
export default Projects;
