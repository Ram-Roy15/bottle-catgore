import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS } from "../Utilities/localstorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("../../../public/watches.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const [card, setCard] = useState([]);

  const handleBottle = (bottle) => {
    // console.log(bottle);
    setCard([...card, bottle]);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h3>Available bottles Here:{bottles.length} </h3>
      <h3>Added card: {card.length}</h3>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleBottle={handleBottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
