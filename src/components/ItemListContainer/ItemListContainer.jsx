const ItemListContainer = ({ greeting }) => {
  const greetingStyles = {
    fontSize: "3rem",
    fontWeight: "600",
    textAlign: "center",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    color: "#f19236",
  };
  return <div style={greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;
