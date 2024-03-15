import ProtoTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleBottle }) => {
  const { name, img, price, stock, ratings } = bottle;
  console.log(bottle);
  return (
    <div className="bottle">
      <h2>Name: {name} </h2>
      <p>Price: {price}</p>
      <p>Ratings:{ratings}</p>
      <p>Stock:{stock} </p>
      <img src={img} alt="" />
      <br />
      <button onClick={() => handleBottle(bottle)}>Purches</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: ProtoTypes.object.isRequired,
  handleBottle: ProtoTypes.func.isRequired,
};
export default Bottle;
