import React, { useState } from 'react';
import CardHandler from './CardHandler';
import InputGroup from 'react-bootstrap/InputGroup';
function Main({ sideBar }) {
  const [string, setString] = useState(null);
  const [card, setCard] = useState([]);
  const changeHandler = e => {
    setString(e.target.value.slice(-1));
    setCard([...card, e.target.value.slice(-1)]);
  };
  console.log(card, 'card');
  console.log(string, 'string');
  return (
    <div className={sideBar ? 'main' : 'main_other'}>
      <input type='text' onChange={changeHandler} placeholder='Type Here' />

      <div className='card-wrapper'>
        {card.map((card, index) => (
          <CardHandler card={card} key={index} index={index} string={string} />
        ))}
      </div>
    </div>
  );
}

export default Main;
