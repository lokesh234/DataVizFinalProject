import React, {useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = "https://raw.githubusercontent.com/Chrissymbeck/Greek-Life-Demographics/master/Greek_Data_Duke_Class_of_2018.csv"

const row = d => {
    d["Longitude of Home City"] = +d["Longitude of Home City"];
    d["Latitude of Home City"] = +d["Latitude of Home City"];
    d['Tuition of High School'] = +d['Tuition of High School'];
    return d;
}

export const useCities = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvUrl, row).then(setData);
    }, []);

    return data;
}


export const sumArray = [{"Fraternity" : "Alpha Delta Phi", "Tuition": 154040.04},
    {"Fraternity" : "Alpha Epsilon Pi", "Tuition": 169811},
    {"Fraternity" : "Alpha Tau Omega", "Tuition": 413991},
    {"Fraternity" : "Chi Psi", "Tuition": 26050},
    {"Fraternity" : "Delta Kappa Epsilon", "Tuition": 17790},
    {"Fraternity" : "Delta Sigma Phi", "Tuition": 0},
    {"Fraternity" : "Delta Tau Delta", "Tuition": 260520.77000000002},
    {"Fraternity" : "Kappa Alpha Order", "Tuition": 0},
    {"Fraternity" : "Kappa Sigma", "Tuition": 0},
    {"Fraternity" : "Pi Kappa Alpha", "Tuition": 265833.74},
    {"Fraternity" : "Pi Kappa Phi", "Tuition": 290847.07},
    {"Fraternity" : "Psi Upsilon", "Tuition": 0},
    {"Fraternity" : "Sigma Alpha Epsilon", "Tuition": 140714.1},
    {"Fraternity" : "Sigma Chi", "Tuition": 139016},
    {"Fraternity" : "Sigma Nu", "Tuition": 558912.45},
    {"Fraternity" : "Sigma Phi Epsilon", "Tuition": 429984.63},]

export const sratArray = [
    {"Sorority" : "Kappa Alpha Theta", "Tuition": 154040.04},
    {"Sorority" : "Alpha Phi", "Tuition": 169811},
    {"Sorority" : "Delta Gamma", "Tuition": 413991},
    {"Sorority" : "Delta Delta Delta", "Tuition": 26050},
    {"Sorority" : "Zeta Tau Alpha", "Tuition": 17790},
    {"Sorority" : "Chi Omega", "Tuition": 0},
    {"Sorority" : "Gamma Phi Beta", "Tuition": 260520.77000000002},
    {"Sorority" : "Pi Beta Phi", "Tuition": 0},
    {"Sorority" : "Kappa Kappa Gamma", "Tuition": 0},
    {"Sorority" : "Alpha Delta Pi", "Tuition": 265833.74},
]


