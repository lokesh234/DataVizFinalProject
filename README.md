# Diversity in Greek Life 

This project is a data visualization website that visualizes Greek Life at Duke University and shows the different trends in diversity in Greek Life at the School.

##### Table of Contents  
  -[Data](#Data)  
  -[Setup](#Setup)  
  -[Questions](#Questions)  
  -[Sketches](#Sketches)   
  -[Schedule](#Schedule)  
  -[Schedule](#Schedule)  
  -[Acknowledgements](#Acknowledgements)  

## Data

The data I propose to visualize for my project is the Duke University Greek Life Data Set. The dataset was originally published at [Greek-Life-Demographics](https://raw.githubusercontent.com/Chrissymbeck/Greek-Life-Demographics/master/Greek_Data_Duke_Class_of_2018.csv), this dataset contains the data The Chronicle used to analyze trends between those who do and don't join Greek life at Duke.

## Setup

To run the website download the code from github using `git clone` and clone the repository into your local computer. After cloning the repository `cd` into project workspace,  and run `npm install` to download the necessary node packages required to run the website. Once the node packages are done installing, use the command `npm start` on your terminal to run the project on your `localhost:3000` 

## Libraries

I am using the following libraries and frameworks for the project :-
##### 
      - [React](https://github.com/facebook/react) 
      - [React DOM](https://github.com/facebook/react/tree/master/packages/react-dom)
      - [React Router DOM](https://github.com/facebook/react)
      - [React CSV-TO-TABLE](https://github.com/marudhupandiyang/react-csv-to-table)
      - [D3](https://github.com/d3/d3)
      - [D3 Geo](https://github.com/d3/d3-geo) 
      - [Material UI](https://github.com/mui-org/material-ui) 
      - [TopoJSON](https://github.com/topojson/topojson)

## Questions 

Tasks and Questions that drive the visualization and interaction decisions for this project:

 * Create a United States HeatMap of students that come from different states to Duke and once you click on a circle it opens a new page to show a bar chart of the different fraternities or Sororities.
 * Create a pie chart that lets you click on a section and allows you to see the average price of tuition of the fraternity by each slice.
 * Creating a bar chart from a drop menu of different states for the average tuition price by high school of Fraternities and Sororities.
 * Creating a pie chart based on the different factors available in the dataset about if the student went to a religious high school, if they received a merit scholarship, if they went to a Co-Ed High School, if they are in a Sports Team, How many international students joined Greek Life and how many did not? 

## Sketches

The following image is a rough sketch of the United States Heat map of students that come from different states to Duke and once you click on a circle it opens a new page to show a bar chart of the different fraternities or Sororities. The pie chart right next to it lets you click on a section and allows you to see the average price of tuition of the fraternity by each slice.

![image](https://raw.githubusercontent.com/lokesh234/dataviz-project-template-proposal/master/viz1.PNG)

The following image shows one of the different factors about the dataset that allows you to see if the students went to a public or a private high school. The dropdown next to it lets you create a bar chart based on different states for the average tuition price by high school of Fraternities and Sororities.

![image](https://raw.githubusercontent.com/lokesh234/dataviz-project-template-proposal/master/viz2.PNG)


## Schedule 

|Time Required (in Hrs)    | Task          |  Expected Delivery | 
|-------------|---------------|-------------|
| 5 | Creating the base website with links to hold all the visualizations with styling from Material-UI. | 10/11/2020 |
| 2 | Creating the United States heatmap of all the students who joined Greek Life in different states and cities with the option of choosing who joined Greek Life vs Who Did not. | 10/14/2020 |
| 3 | Resizing the points on the map to being circles based on the tuition price of high school students. | 10/18/2020 |
| 5 | Making the circles clickable that opens up a bar chart of fraternities and sororities based on the state that the user clicked.| 10/21/2020 |
| 3 | Creating a pie chart of the average price of high school of fraternities and sororities and you can switch between using a bottom navigation component. | 10/28/2020 |
| 2 | Creating a vertical bar chart with a bottom navigation component of fraternities and sororities with a dropdown menu that allows you to switch states (Realized this sketch just need to make some design changes). | 10/31/2020 |
| 2 | Making a sidebar for the last page that holds the option of switching between different data visualizations. | 10/31/2020 |
| 7 | Creating multiple visualizations with different styling. | 10/31/2020 |
| 5 | Allowing users to switch between the visualizations to see which students joined greek life based on different factors like if they went to Co-Ed School,  Religious School, and many more . | 11/04/2020 |

## Acknowledgements 
