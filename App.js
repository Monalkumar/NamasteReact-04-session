import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id:"title"} ,"hello world");
const heading1 = React.createElement("h2", {id:"hello"} ,"Pizza");
const heading3 = React.createElement("h2", {id:"hello"} ,"Burger");
const heading4 = React.createElement("h2", {id:"hello"} ,"sandwich");
const heading5 = React.createElement("h2", {id:"hello"} ,"cocktail");
const heading2 = React.createElement("h2", {id:"hello"} ,"hello world coding");
const headinge = React.createElement("h2", {id:"hello"} ,"Hello progrmming");
const container = React.createElement("div", {id:"container"} ,[heading, heading1,heading2,heading3,heading4,heading5,headinge]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)


