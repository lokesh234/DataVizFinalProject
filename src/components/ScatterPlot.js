import React, {Fragment} from 'react';
import { scaleLinear, scaleBand, max } from 'd3';
import '../pages/heatmap.css';
const width = 1700;
const height = 700;
const margin = { top: 60, right: 30, bottom: 65, left: 60 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

function SactterPlotViz({data}) {

    if (!data) {
        return <pre> Loading... </pre>
    }



    const xScale = scaleBand()
        .domain(data.map(d => d['Greek Organization']))
        .range([0, innerWidth])
        .padding(0.1)
    ;

    const yScale = scaleLinear()
        .domain([0, max(data, d => d['Tuition of High School'])])
        .range([innerHeight, 0])



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
                            <g transform={`translate(${xScale(tickValue) + xScale.bandwidth()/2}, 0)`}>
                                <text y={innerHeight + 20} style={{ textAnchor: "middle"}} dy={".71em"}>{tickValue}</text>
                            </g>
                        )
                    })}
                    {data.map(d => <circle className="rectangles" cx={xScale(d['Greek Organization'])} cy={yScale(d['Tuition of High School'])} r={5} />)
                    }
                </g>
            </svg>
        </Fragment>
    )
}

export default SactterPlotViz;

