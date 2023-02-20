import React from "react";
import "../css/style.css"
function LogoSide(props) {
  return (
    <>
        <div className={props.mode === 'dark' ? 'dark-mode' : ''}>
        <span className="titleName">Where in the world?</span>
        </div>
    </>
  );
}

export default LogoSide;