import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './card.css';

const cardData = [
  {
    id: 1,
    title: 'INNOVATIVE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id elementum mi, non finibus tortor. In nunc augue, rhoncus sit amet ornare at, scelerisque nec erat.',
    icon: <FaUser />,
    color: 'red',
  },
  {
    id: 2,
    title: 'LOYALTY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id elementum mi, non finibus tortor. In nunc augue, rhoncus sit amet ornare at, scelerisque nec erat.',
    icon: <FaBriefcase />,
    color: 'blue',
  },
  {
    id: 3,
    title: 'RESPECT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id elementum mi, non finibus tortor. In nunc augue, rhoncus sit amet ornare at, scelerisque nec erat.',
    icon: <FaEnvelope />,
    color: 'green',
  },
];

function CardSection() {
  return (
    <Row>
      <Col md={12} className="my-4">
        <h3 className="text-center mb-4">Our Values</h3>
      </Col>
      {cardData.map((card) => (
        <Col key={card.id} md={4} className="my-4 d-flex align-items-center">
          <div className="mx-auto">
            <Card className={`text-center custom-bg-${card.color}`} text="white" style={{ width: "300px" }}>
              <Card.Body>
                <div className="d-flex flex-column align-items-center">
                  <div className="mb-3">{card.icon}</div>
                  <Card.Title>{card.title}</Card.Title>
                </div>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default CardSection;
