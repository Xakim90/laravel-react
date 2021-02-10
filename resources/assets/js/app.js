require("./bootstrap");
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Main from "./components/Main";

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}