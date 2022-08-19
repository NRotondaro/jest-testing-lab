import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOption from './ScoopOption';

export default function Options({ optionTypes }) {
  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionTypes}`)
      .then((response) => setItems(response.data))
      .catch((err) => {
        // TODO: handle error response
      });
  }, [optionTypes]);

  // TODO: replace 'null' with ToppingOption
  const ItemComponent = optionTypes === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return (
    <div>
      <Row>{optionItems}</Row>;
    </div>
  );
}
