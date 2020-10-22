import React, {useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = "https://raw.githubusercontent.com/Chrissymbeck/Greek-Life-Demographics/master/Greek_Data_Duke_Class_of_2018.csv"

const row = d => {
    d["Longitude of Home City"] = +d["Longitude of Home City"];
    d["Latitude of Home City"] = +d["Latitude of Home City"];

    return d;
}

export const useCities = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvUrl, row).then(setData);
    }, []);

    return data;
}

