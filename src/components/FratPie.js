import React, {Fragment} from "react";
import {sumArray} from "../data/useCities";
import {arc, pie} from "d3";


const width = 1600;
const height = 800;
const centerX = width/2 + 150;
const centerY = (height + 150)/2;

function FratPie() {
    console.log(sumArray);

    const colorArray = ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c',
        "#f16913",
        '#d94801', '#a63603', '#7f2704', '#fff5f0', '#fee0d2',
        '#fcbba1', '#ef3b2c', '#F58C62', '#E6331A', '#33FFCC',];

    const data = pie().sort(null).value(function (d) {
        return d.Tuition
    })

    const pieArc = arc()
        .innerRadius(0)
        .outerRadius(200).padAngle(.05).padRadius(50);

    const betterArray = sumArray.filter(function (fl) {
        return fl.Tuition > 0;
    })

    const finalArray = [];

    betterArray.forEach(function (fl) {
        finalArray.push(fl.Tuition)
    });

    const arcs = pie()(betterArray.map(function(d) { return d.Tuition; }));

    return (
        <svg width={width} height={height} className="SVG" >
            <g transform="translate(100,325)">
                {betterArray.map((d,i) => (
                    <g>
                        <circle style={{fill: colorArray[i], stroke: colorArray[i]}} cx={0} cy={i*30}
                                r={10}/>
                        <text x="30" y={i*30.2}> - {d.Fraternity}</text>
                    </g>
                ))}
            </g>
            <g transform={`translate(${centerX},${centerY})`}>
                {arcs.map((d,i) => (
                    <path fill={colorArray[i]} d={pieArc(d)}/>
                ))}
            </g>

        </svg>
    )
}

export default FratPie
