import React, { useEffect, useState } from "react";
import { Col, Row } from 'antd';
import "../css/style.css"
import LogoSide from "../components/LogoSide";
import DarkModeSide from "../components/DarkModeSide";
function Navbar() {
  const [mode, setMode] = useState('light');
  const [showText, setShowText] = useState('tamjid');
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);
  useEffect(() => {
    const textMode = localStorage.getItem('text');
    console.log("txtMode", textMode);
    if (textMode) {
      setShowText(textMode);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    const newText = showText === "tamjid" ? "asmar" : "tamjid";
    setShowText(newText)
    localStorage.setItem('text', newText);

  }
  return (
    <div className="ant-row">
    <Row>
      <Col span={12}> 
       <LogoSide mode={mode}/>
       </Col>
       <Col span={12}> 
          <DarkModeSide 
          toggleMode={toggleMode} 
          mode={mode}
          showText={showText} 
          setShowText={setShowText} 
          setMode={setMode} />
       </Col>
    </Row>    
    
    </div>
   
  );
}

export default Navbar;