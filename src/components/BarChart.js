import React, {Fragment} from 'react';
import { scaleLinear, scaleBand, max } from 'd3';
import '../pages/heatmap.css';
const width = 1700;
const height = 700;
const margin = { top: 60, right: 30, bottom: 65, left: 60 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

function BarChart({data, state}) {

    if (!data) {
        return <pre> Loading... </pre>
    }

    const statedata = [];
    data.forEach(function (d) {
        if (d['Home State'] === state){
            statedata.push(d);
        }
    }
    )

    const xScale = scaleBand()
        .domain(statedata.map(d => d['Greek Organization']))
        .range([0, innerWidth])
        .padding(0.1)
    ;

    const yScale = scaleLinear()
        .domain([0, max(statedata, d => d['Tuition of High School'])])
        .range([0, innerHeight])



    return (
        <Fragment>
        <svg width={width} height={height} style={{ margin: 100 }}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {yScale.ticks().map(tickValue => {
                    return (
                        <g className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
                        <line x2={innerWidth}/>
                        <text x={-30} style={{ textAnchor: "middle"}} dy={".71em"}>{tickValue}</text>
                        </g>
                    )
                })}
                {xScale.domain().map(tickValue => {
                    return (
                        <g transform={`translate(${xScale(tickValue)}, 0)`}>
                            <text y={-15} style={{ textAnchor: "middle"}} dy={".71em"}>{tickValue}</text>
                        </g>
                    )
                })}
            {statedata.map(d => <rect className="rectangles" x={xScale(d['Greek Organization'])} y={0} width={xScale.bandwidth()} height={yScale(d['Tuition of High School'])} />)
                }
            </g>
        </svg>
        </Fragment>
    )
}

export default BarChart;
