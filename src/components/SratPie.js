import React, {Fragment} from "react";
import {sratArray} from "../data/useCities";
import {arc, pie} from "d3";


const width = 1600;
const height = 800;
const centerX = width/2 + 150;
const centerY = (height + 150)/2;

function SratPie() {


    const colorArray = ['#EF5411', '#FA5B0F', '#FF6517', '#FF822E', '#00B3E6',
        "#F4EDBD",
        '#B5A269', '#756944', '#999966', '#F5DB8E', '#B34D4D',
        '#B56748', '#75432F', '#F58C62', '#E6331A', '#33FFCC',];


    const pieArc = arc()
        .innerRadius(0)
        .outerRadius(200).padAngle(.05).padRadius(50);

    const betterArray = sratArray.filter(function (fl) {
        return fl.Tuition > 0;
    })

    const finalArray = [];

    betterArray.forEach(function (fl) {
        finalArray.push(fl.Tuition/betterArray.length)
    });

    return (
        <svg width={width} height={height} className="SVG" >
            <g transform="translate(100,325)">
                {betterArray.map((d,i) => (
                    <g>
                        <circle style={{fill: colorArray[i], stroke: colorArray[i]}} cx={0} cy={i*30}
                                r={10}/>
                        <text x="30" y={i*30.2}> - {d.Sorority}</text>
                    </g>
                ))}
            </g>
            <g transform={`translate(${centerX},${centerY})`}>
                {finalArray.map((d,i) => (
                    <path fill={colorArray[i]} d={pieArc({
                            startAngle: (finalArray[i]) * 2 * Math.PI,
                            endAngle: (finalArray[i] + 0.12) * 2 * Math.PI
                        }
                    )}/>
                ))}
            </g>

        </svg>
    )
}

export default SratPie
