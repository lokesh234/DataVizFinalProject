# Diversity in Greek Life 

This project is a data visualization website that visualizes Greek Life at Duke University and shows the different trends in diversity in Greek Life at the School.

##### Table of Contents  
  -[Data](#Data)  
  -[Setup](#Setup)  
  -[Libraries](#Libraries)  
  -[Project](#Project)   
  -[Acknowledgements](#Acknowledgements)  

## Data

The data I propose to visualize for my project is the Duke University Greek Life Data Set. The dataset was originally published at [Greek-Life-Demographics](https://raw.githubusercontent.com/Chrissymbeck/Greek-Life-Demographics/master/Greek_Data_Duke_Class_of_2018.csv), this dataset contains the data The Chronicle used to analyze trends between those who do and don't join Greek life at Duke.

## Setup

To run the website download the code from github using `git clone` and clone the repository into your local computer. After cloning the repository `cd` into project workspace,  and run `npm install` to download the necessary node packages required to run the website. Once the node packages are done installing, use the command `npm start` on your terminal to run the project on your `localhost:3000` 

## Libraries

I am using the following libraries and frameworks for the project :- \
      - [React](https://github.com/facebook/react)\
      - [React DOM](https://github.com/facebook/react/tree/master/packages/react-dom)\
      - [React Router DOM](https://github.com/facebook/react)\
      - [React CSV-TO-TABLE](https://github.com/marudhupandiyang/react-csv-to-table)\
      - [D3](https://github.com/d3/d3)\
      - [D3 Geo](https://github.com/d3/d3-geo)\
      - [Material UI](https://github.com/mui-org/material-ui)\
      - [TopoJSON](https://github.com/topojson/topojson)

## Project

When you first open the project the website takes you to the home page where you can interact with the three bottom navigation tabs to get more information about the project. The three bottom navigation tabs are : Project, About the Data and Raw Data. The project page contains information about the project and is a copy this READMe file. When you click on About the data tab it gives you information about the data and links to the original dataset. 

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz11.PNG)

The raw data tab contains the data in a tabulated format with the help of csv-to-table library. 

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz12.PNG)

After getting some information about the data you can choose which data visualization you want to visualize, you can choose any visualization from the top bar. 

### Heatmap

The Heatmap visualization provides a heatmap of the United States with a interactive color legend to explore where different students come from at Duke. The size of the circle represent the highschool price of different students. 

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz13.PNG)

You can see the highschool price of different studenst that did not join any Greek Organization by clicking on the bottom navigationn.

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/not.png)

The Heatmap has an interactive legend and when you hover over a specific legend the map will highlight the respective selection. 

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Srat.png)

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Frat.png)

The map also allows you to click on a specific point to find out what the average tuition price is in that state. The following is the bar chart when you click on California.

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/VIz15.PNG)

### Bar Chart 

If you don't want to click on the map itself you can click the Bar Chart Page and select the specific state manually.  

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Baqr.PNG)

### Pie Chart 

The pie chart gives you the a clear idea of which fraternity and sorority has the highest average tuition is. 

As we can see that Sigma Chi has the highest average tuition out of all the fraternities. 

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/Fratpie.PNG)

Delta Gamma has the highest average tuition out of all the sororities. 

![image](https://raw.githubusercontent.com/lokesh234/DataVizFinalProject/master/SratPi.PNG)


## Acknowledgements 

I would like to acknowledge Prof. Kelleher for his teaching and his time in helping me figure out how to make a vertical bar chart and pie chart for my final project. I would also like to thank all the developer of the respective libraries I am using for my final project. My project would not have been possible if not Prof. Kelleher and the respective libraries. 
