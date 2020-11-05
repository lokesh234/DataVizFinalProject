import React, {Fragment, useState} from "react";
import { geoAlbersUsa, geoAlbers, geoPath } from 'd3-geo';
import './Marks.css'
import USMapData from "./USMap";
import '../pages/heatmap.css'
import { feature } from 'topojson';
import { Link } from "react-router-dom";
const projection = geoAlbers().scale(1600);
const path = geoPath(projection);
const width = 1600;
const height = 900;


function Marks({cities}) {
    const USstates = feature(USMapData, USMapData.objects.states).features;
    const [opacityF, setOpacityF] = useState(0.5);
    const [opacityS, setOpacityS] = useState(0.5);
    const [opacityN, setOpacityN] = useState(0.5);
    const [opacityB, setOpacityB] = useState(1);

    console.log(cities);

    function legendEnter(Aff) {
        if (Aff === "Fraternity"){
            setOpacityS(0.1);
            setOpacityN(0.1);
            setOpacityB(0.1);
        }
        if (Aff === "Sorority"){
            setOpacityF(0.1);
            setOpacityN(0.1);
            setOpacityB(0.1);
        }
        if (Aff === "No Affiliation"){
            setOpacityS(0.1);
            setOpacityF(0.1);
            setOpacityB(0.1);
        }
    }

    function legendLeave(Aff) {
        setOpacityF(0.5);
        setOpacityS(0.5);
        setOpacityN(0.5);
        setOpacityB(1)
    }

    return (
        <Fragment>
            <svg width={width} height={height} className="SVG" >
            <g className="marks" transform="translate(500,225)">

            {USstates.map(States => (
                <path d={path(States)}/>
            ))}
            {cities.map(d => {
              const [x,y] = projection([d["Longitude of Home City"], d["Latitude of Home City"]]);
              const radius = d['Tuition of High School']/1250;
              const USstate = d['Home State']
              const newTo = {
                    pathname: "/barchart",
                    United: USstate
              };
              if (d['Greek Council'] === 'Sorority'){
                  return (
                      <Link to={newTo}>
                      <circle style={{ fill: `rgba(255,182,193, ${opacityS})`, stroke: `rgba(255,182,193, ${opacityB})`}} cx={x} cy={y} r={radius} />
                      </Link>
                  )
              }
              else if (d['Greek Council'] === 'Fraternity') {
                  return (
                      <Link to={newTo}>
                      <circle style={{fill: `rgba(44, 130, 201, ${opacityF})`, stroke: `rgba(44, 130, 201, ${opacityB})`}} cx={x} cy={y} r={radius} />
                      </Link>
                  )
              }
              else {
                    return (
                        <Link to={newTo}>
                        <circle style={{fill: `rgba(0,0,0, ${opacityN})`, stroke: `rgba(0,0,0, ${opacityB})` }} cx={x} cy={y} r={radius} />
                        </Link>
                    )
                }
              })}

            </g>
                <g transform="translate(100,225)">
                    <g onMouseEnter={() => legendEnter("Fraternity")} onMouseLeave={() => legendLeave("Fraternity")}>
                    <circle style={{fill: `rgba(44, 130, 201, 0.5)`, stroke: "rgba(44, 130, 201, 1)"}} cx={0} cy={0} r={10} />
                    <text x="30" y="5"> - Fraternity </text>
                    </g>
                    <g onMouseEnter={() => legendEnter("Sorority")} onMouseLeave={() => legendLeave("Sorority")}>
                    <circle style={{ fill: `rgba(255,182,193, 0.5)`, stroke: "rgba(255,182,193, 1)"}} cx={0} cy={30} r={10} />
                    <text x="30" y="35"> - Sorority </text>
                    </g>
                    <g onMouseEnter={() => legendEnter("No Affiliation")} onMouseLeave={() => legendLeave("No Affiliation")}>
                    <circle style={{ fill: `rgba(0,0,0, 0.5)`, stroke: "rgba(0,0,0, 1)"}} cx={0} cy={60} r={10} />
                    <text x="30" y="65"> - No Affiliation </text>
                    </g>
                </g>
            </svg>
        </Fragment>
    )
}

export default Marks;
