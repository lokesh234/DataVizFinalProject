import React, {Fragment} from 'react';


function READMe({data}) {


    return (
        <Fragment>
            <h1 id="diversity-in-greek-life">Diversity in Greek Life</h1>
            <p>This project is a data visualization website that visualizes Greek Life at Duke University and shows the
                different trends in diversity in Greek Life at the School.</p>
            <h5 id="table-of-contents">Table of Contents</h5>
            <p> -Data<br/> -Setup<br/> -Libraries<br/> -Project<br/> -Acknowledgements
            </p>
            <h2 id="data">Data</h2>
            <p>The data I propose to visualize for my project is the Duke University Greek Life Data Set. The dataset
                was originally published at <a
                    href="https://raw.githubusercontent.com/Chrissymbeck/Greek-Life-Demographics/master/Greek_Data_Duke_Class_of_2018.csv">Greek-Life-Demographics</a>,
                this dataset contains the data The Chronicle used to analyze trends between those who do and don&#39;t
                join Greek life at Duke.</p>
            <h2 id="setup">Setup</h2>
            <p>To run the website download the code from github using <code>git clone</code> and clone the repository
                into your local computer. After cloning the repository <code>cd</code> into project workspace, and
                run <code>npm install</code> to download the necessary node packages required to run the website. Once
                the node packages are done installing, use the command <code>npm start</code> on your terminal to run
                the project on your <code>localhost:3000</code></p>
            <h2 id="libraries">Libraries</h2>
            <p>I am using the following libraries and frameworks for the project :- \</p>
            <pre><code>  - [<span className="hljs-string">React</span>](<span
                className="hljs-link">https://github.com/facebook/react</span>)\
  - [<span className="hljs-string">React DOM</span>](<span
                    className="hljs-link">https://github.com/facebook/react/tree/master/packages/react-dom</span>)\
  - [<span className="hljs-string">React Router DOM</span>](<span
                    className="hljs-link">https://github.com/facebook/react</span>)\
  - [<span className="hljs-string">React CSV-TO-TABLE</span>](<span
                    className="hljs-link">https://github.com/marudhupandiyang/react-csv-to-table</span>)\
  - [<span className="hljs-string">D3</span>](<span className="hljs-link">https://github.com/d3/d3</span>)\
  - [<span className="hljs-string">D3 Geo</span>](<span className="hljs-link">https://github.com/d3/d3-geo</span>)\
  - [<span className="hljs-string">Material UI</span>](<span
                    className="hljs-link">https://github.com/mui-org/material-ui</span>)\
  - [<span className="hljs-string">TopoJSON</span>](<span
                    className="hljs-link">https://github.com/topojson/topojson</span>)
</code></pre>
            <h2 id="project">Project</h2>
            <p>When you first open the project the website takes you to the home page where you can interact with the
                three bottom navigation tabs to get more information about the project. The three bottom navigation tabs
                are : Project, About the Data and Raw Data. The project page contains information about the project and
                is a copy this READMe file. When you click on About the data tab it gives you information about the data
                and links to the original dataset. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz11.PNG" alt="image"/>
            </p>
            <p>The raw data tab contains the data in a tabulated format with the help of csv-to-table library. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz12.PNG" alt="image"/>
            </p>
            <p>After getting some information about the data you can choose which data visualization you want to
                visualize, you can choose any visualization from the top bar. </p>
            <h3 id="heatmap">Heatmap</h3>
            <p>The Heatmap visualization provides a heatmap of the United States with a interactive color legend to
                explore where different students come from at Duke. The size of the circle represent the highschool
                price of different students. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz13.PNG" alt="image"/>
            </p>
            <p>You can see the highschool price of different studenst that did not join any Greek Organization by
                clicking on the bottom navigationn.</p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/not.png" alt="image"/>
            </p>
            <p>The Heatmap has an interactive legend and when you hover over a specific legend the map will highlight
                the respective selection. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Srat.png" alt="image"/>
            </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Frat.png" alt="image"/>
            </p>
            <p>The map also allows you to click on a specific point to find out what the average tuition price is in
                that state. The following is the bar chart when you click on California.</p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz15.PNG" alt="image"/>
            </p>
            <h3 id="bar-chart">Bar Chart</h3>
            <p>If you don&#39;t want to click on the map itself you can click the Bar Chart Page and select the specific
                state manually. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Baqr.PNG" alt="image"/>
            </p>
            <h3 id="pie-chart">Pie Chart</h3>
            <p>The pie chart gives you the a clear idea of which fraternity and sorority has the highest average tuition
                is. </p>
            <p>As we can see that Sigma Chi has the highest average tuition out of all the fraternities. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Fratpie.PNG"
                    alt="image"/></p>
            <p>Delta Gamma has the highest average tuition out of all the sororities. </p>
            <p><img src="https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/SratPi.PNG" alt="image"/>
            </p>
            <h2 id="acknowledgements">Acknowledgements</h2>
            <p>I would like to acknowledge Prof. Kelleher for his teaching and his time in helping me figure out how to
                make a vertical bar chart and pie chart for my final project. I would also like to thank all the
                developer of the respective libraries I am using for my final project. My project would not have been
                possible if not Prof. Kelleher and the respective libraries. </p>
        </Fragment>
)
}

export default READMe;
