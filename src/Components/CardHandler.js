import React from 'react';
import { Card } from 'react-bootstrap';
const CardHandler = ({ card, index }) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor, 'hi');
  const mystyle = {
    border: `3px solid #${randomColor}`,
    color: '#' + randomColor,
    width: '18rem',
  };
  const mystyle1 = {
    width: '18rem',
  };
  return card ? (
    <Card style={(index + 1) % 3 === 0 ? mystyle : mystyle1} className='card'>
      <Card.Body>
        <Card.Title>{card}</Card.Title>
      </Card.Body>
    </Card>
  ) : (
    ''
  );
};

export default CardHandler;
