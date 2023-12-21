const checkWinner = () => {
  return [...cards.children].every((card) => {
    return [...card.children].every((ca) => {
      return ca.classList.contains("winner");
    });
  });
};
export default checkWinner;
