import React, { useEffect, useState } from "react";
import { Col, Row } from 'antd';
import "../css/style.css"
function Navbar() {
  // const [mode, setMode] = useState('light');
  // const [showText, setShowText] = useState('tamjid');
  // useEffect(() => {
  //   const savedMode = localStorage.getItem('mode');
  //   if (savedMode) {
  //     setMode(savedMode);
  //   }
  // }, []);
  // useEffect(() => {
  //   const textMode = localStorage.getItem('text');
  //   console.log("txtMode", textMode);
  //   if (textMode) {
  //     setShowText(textMode);
  //   }
  // }, []);

  // const toggleMode = () => {
  //   const newMode = mode === 'light' ? 'dark' : 'light';
  //   setMode(newMode);
  //   localStorage.setItem('mode', newMode);
  //   const newText = showText === "tamjid" ? "asmar" : "tamjid";
  //   setShowText(newText)
  //   localStorage.setItem('text', newText);

  // }
  return (
  <div className="ant-row" style={{backgroundColor: "red"}}>
    <Row>
      <Col xs={{
        span: 8,
        offset: 1,
      }}
      lg={{
        span: 8,
        offset: 2,
      }}> 
        <span className="titleName">Where in the world?</span>
       </Col>
       <Col span={8}>
       <a><i className="fas fa-moon" aria-hidden="true"></i> fa-camera-retro</a>
       <i class="fas fa-sun"></i>
       </Col>
    </Row>    
    
    </div>
   
  );
}

export default Navbar;