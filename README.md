# Dashboard Sport App

We are introducing our dashboard for SportSee app. This allows you to follow your progression and all the results from your activities. 

Dynamic graphs, scores and everything you need to have a real view of your evolution.

We are trying to keep our best to improve the dashboard, changes can be merged to master.

## Introduction

The dashboard was developped to be the most readiable and comprehensiable. The mains colors we used are the red and black with the SportSee colors.

![Image of the dashboard](/src/assets/dashboard-screen.png)

## Getting Started

### Prerequisites

- [nodeJs (V12.18)](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/).

### Node server

#### Install the node server

First of all, we need to launch the server to have our routes and URLs to fetch the data on. Follow the instruction on the guithub provided for the server : 

- [node server](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

#### Launch the server

To launch the server, you need to go inside your reporsitory and run `yarn start`.

It will normaly launch the server on :
> http://localhost:3000/

### Front Dashboard in React

#### Install the dashboard

To use our dashboard, you need to clone this repository on your machine :
```
git init
git remote add origin https://github.com/Erudigit/dashboard-openclassrooms.git
git pull origin master
```
Be sure that the proxy is on "http://localhost:3000" in package.json.

#### Launch the dashboard

Before launch the dashboard, you will need to launch the server on the adress http://localhost:3000.
Once you installed the dashboard, you only need to run it with `yarn start`.
The terminal will ask you to launch it on the port **3001**, say **yes**.

Your dashboard is ready to use. 🎉

## How to use

### Ressource

All the data you can fetch from the server concern 2 fictitious persons for the example. That will allow you to understand how the dashboard work and his possibilities.

The Id of both are **12** and **18**, you will need to fetch data from this two Ids.

### Use the dashboard

The dashboard is now running on the port **3001**, you can navigate and have a look of the activities of the 2 fictitious persons trough the 2 routes for each : 

`http://localhost:3001/user/12`
`http://localhost:3001/user/18`

And then here we are. 🥳


## Documentation

APIs called by the dashboard : 
- rechart
- better-doc
- prop-type
- fetch

Documents given upstram of the project : 
- [Mockup on Figma](https://www.figma.com/file/EUeLaIjt4cf9bZb1hexM6y/UI-design-Sportify-EN?node-id=1%3A2)
- [All user Stories](https://www.notion.so/Dashboard-SportSee-app-7b85195904ab497f8930a56d0f1b2c1e?p=219ee9175c6f40a597fba28dee07a6c3&pm=s)

## Contribution 

This Dashboard has been developped by [Vincent Duguet](https://github.com/Erudigit) under the guidance of his mentor Thomas. 

---

*Copyright 2022 Dashboard*

<!-- How to launch and use the app -->
<!-- Version of node -->
<!-- Include the api we used -->

<!-- https://reactjs.org/docs/typechecking-with-proptypes.html#function-components -->
<!-- https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/ -->
<!-- First install jsDoc (globally) : https://www.npmjs.com/package/jsdoc -->
<!-- Then library for component (inside the application) : https://www.npmjs.com/package/better-docs -> @component -->
<!-- Write the command to generate -->