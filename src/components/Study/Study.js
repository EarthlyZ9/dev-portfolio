import classes from './Study.module.css';
import Title from '../UI/Title';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './bubbleChart.css';
import { studyData } from '../../data/studyData';
import Banner from '../UI/Banner';
import { chart, createSimulation, fillColour, ticked } from '../../util/bubble-chart';

const study = (props, ref) => {
    const divRef = useRef(null);

    useEffect(() => {
        const height = 700;
        const width = props.canvasWidth > 600 ? props.canvasWidth : 600;

        const svgSection = d3.select(divRef.current);

        const simulation = createSimulation(width, height);
        const nodes = chart(svgSection, studyData, width, height);


        if (props.startSimulation) {
            svgSection.selectAll('.bubble').attr('fill', (d) => fillColour(d.groupId));
            svgSection.selectAll('text').style('fill', 'black');

            // set simulation's nodes to our newly created nodes array
            // simulation starts running automatically once nodes are set
            simulation.nodes(nodes).on('tick', ticked).restart();
        }

        return () => {
            d3.select('.chart-area-svg').remove();
        };
    }, [props.startSimulation, props.canvasWidth]);

    return (
        <section
            className={classes.study}
            id={props.sectionId}
            ref={(el) => (ref.current[4] = el)}
        >
            <Title title={'Study'} className={classes.title} />
            <div id="bubble-chart" style={{ textAlign: 'center', overflowX: 'scroll' }} ref={divRef}></div>
            <Banner
                title="Earthlyz9 Dev Library 📚"
                body="나를 위해 꾸준히 기록합니다. 하나의 큰 도서관이 될 때까지!"
                url="https://earthlyz9.dev"
            />
        </section>
    );
};

const Study = React.forwardRef(study);

export default Study;
