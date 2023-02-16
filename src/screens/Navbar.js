import React, { useEffect, useState } from "react";
import { Col, Row } from 'antd';
import "../css/style.css"
import LogoSide from "../components/LogoSide";
import DarkModeSide from "../components/DarkModeSide";
function Navbar() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
     setCounter(counter);
  }, [])
  return (
    <div className="ant-row">
    {/* <Row>
      <Col span={12}> 
       <LogoSide />
       </Col>
       <Col span={12}> 
    
       </Col>
    </Row>     */}
    {counter}
    
    </div>
   
  );
}

export default Navbar;