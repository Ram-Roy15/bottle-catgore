const getCardToLS = () => {
  const storedCardString = localStorage.getItem("card");
  if (storedCardString) {
    const storedCard = JSON.parse(storedCardString);
    return storedCard;
  }
  return [];
};

const saveCardToLS = (card) => {
  const saveCardString = JSON.stringify(card);
  localStorage.setItem("card", saveCardString);
};
const addToLS = (id) => {
  const cart = getCardToLS(id);
  cart.push(cart);
  saveCardToLS(cart);
};

export { addToLS };
