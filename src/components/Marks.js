import React, {Fragment} from "react";
import { geoAlbersUsa, geoAlbers, geoPath } from 'd3-geo';
import USMapData from "./USMap";
import '../pages/heatmap.css'
import { feature } from 'topojson';
import { Link } from "react-router-dom";
const projection = geoAlbers().scale(1600);
const path = geoPath(projection);
const width = 1600;
const height = 1000;


function Marks({cities}) {
    const USstates = feature(USMapData, USMapData.objects.states).features

    console.log(cities);



    return (
        <Fragment>
            <svg width={width} height={height} >
            <g className="marks" transform="translate(500,225)">

            {USstates.map(States => (
                <path d={path(States)}/>
            ))}
            {cities.map(d => {
              const [x,y] = projection([d["Longitude of Home City"], d["Latitude of Home City"]]);
              const radius = d['Tuition of High School']/1350;
              const USstate = d['Home State']
              const newTo = {
                    pathname: "/barchart",
                    United: USstate
              };
              if (d['Greek Council'] === 'Sorority'){
                  return (
                      <Link to={newTo}>
                      <circle style={{ fill: "rgba(255,182,193, 0.5)", stroke: "rgba(255,182,193, 1)"}} cx={x} cy={y} r={radius} />
                      </Link>
                  )
              }
              else if (d['Greek Council'] === 'Fraternity') {
                  return (
                      <Link to={newTo}>
                      <circle style={{fill: "rgba(44, 130, 201, 0.5)", stroke: "rgba(44, 130, 201, 1)"}} cx={x} cy={y} r={radius} />
                      </Link>
                  )
              }
              else {
                    return (
                        <Link to={newTo}>
                        <circle style={{fill: "rgba(0,0,0, 0.5)", stroke: "rgba(0,0,0, 1)" }} cx={x} cy={y} r={radius} />
                        </Link>
                    )
                }
              })}

            </g>
                <g transform="translate(100,225)">
                    <circle style={{fill: "rgba(44, 130, 201, 0.5)", stroke: "rgba(44, 130, 201, 1)"}} cx={0} cy={0} r={10}/>
                    <text x="30" y="5"> - Fraternity </text>
                    <circle style={{ fill: "rgba(255,182,193, 0.5)", stroke: "rgba(255,182,193, 1)"}} cx={0} cy={30} r={10} />
                    <text x="30" y="35"> - Sorority </text>
                    <circle style={{ fill: "rgba(0,0,0, 0.5)", stroke: "rgba(0,0,0, 1)"}} cx={0} cy={60} r={10} />
                    <text x="30" y="65"> - No Affiliation </text>
                </g>
            </svg>
        </Fragment>
    )
}

export default Marks;
