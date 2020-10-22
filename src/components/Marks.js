import React, {Fragment} from "react";
import { geoAlbersUsa, geoPath } from 'd3-geo';
import USMapData from "./USMap";
import '../pages/heatmap.css'
import { feature } from 'topojson';
const projection = geoAlbersUsa().scale(1600);
const path = geoPath(projection);
const width = 1600;
const height = 1000;


function Marks({cities}) {
    const USstates = feature(USMapData, USMapData.objects.states).features

    return (
        <Fragment>
            <svg width={width} height={height} >
                <g className="marks" transform="translate(500,200)">

            {USstates.map(States => (
                <path d={path(States)}/>
            ))}
                    {cities.map(d => {
                        const [x,y] = projection([d["Longitude of Home City"], d["Latitude of Home City"]]);
                        console.log(x,y);
                        })}
                </g>
            </svg>
        </Fragment>
    )
}

export default Marks;
