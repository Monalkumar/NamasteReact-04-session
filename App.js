import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id:"title"} ,"hello world");
const heading1 = React.createElement("h2", {id:"hello"} ,"hello world");
const heading2 = React.createElement("h2", {id:"hello"} ,"hello world coding");
const container = React.createElement("div", {id:"container"} ,[heading, heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)


