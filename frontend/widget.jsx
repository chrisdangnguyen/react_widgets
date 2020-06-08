import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';


const tabNames = [
  {title :'First', content : 'Write it first'},
  {title: 'Second', content : "I'm coming in second!"},
  {title : 'Third', content : "How bout that"}
]

function Root() {
  return(
    <div className="page-container">
      <div className="top-info">
        <Clock/>
        <Tab tabNames={tabNames} />
      </div>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Root/>, root);
})

