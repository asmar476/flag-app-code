import React, { useEffect, useState } from "react";
import "../css/style.css"
function DarkModeSide(props) {
  return (
    <>
         <div className={props.mode === 'dark' ? 'dark-mode' : ''}>
      <button onClick={props.toggleMode}>click</button>
      <span>{props.showText}</span>
    </div>
    </>
  );
}

export default DarkModeSide;