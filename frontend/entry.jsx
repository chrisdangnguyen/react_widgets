import React from 'react';
import ReactDOM from "react-dom";
import Widget from './widget'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Widget />, root);
});
