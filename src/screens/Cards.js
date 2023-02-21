import React from "react";
import { Card } from 'antd';
import { Pagination } from 'antd';
import { Col, Row } from 'antd';
const { Meta } = Card;

function Cards() {
  const cards = [
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    },
    {
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      title: "Europe Street beat",
      description:"www.instagram.com"

    }
  ]
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <div className="Cards">
      <Row gutter={16}>
  
      {cards.map((card, i) => 
        <Col span={8}>
       <Card key={i}
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={card.img} />}
     >
       <Meta title={card.title} description={card.description} />
     </Card>
     </Col>
     )}
   

   
   
    </Row>
    <Pagination 
    // onChange={} 
    total={50} 
    itemRender={itemRender} />
        

    </div>
  );
}

export default Cards;