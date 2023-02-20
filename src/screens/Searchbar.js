import React from "react";
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { Button, Dropdown } from 'antd';
function Searchbar() {
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <div className="Searchbar">
        <Row>
      <Col span={6}>  
       <Input placeholder="Basic usage" />
       </Col>
      <Col span={6}>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
      </Col>
    </Row>

    </div>
  );
}

export default Searchbar;