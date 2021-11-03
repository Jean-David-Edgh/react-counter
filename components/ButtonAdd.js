const ButtonAdd = ({ counter, setCounter }) => {
  const handleClick = () => {
    const result = counter + 1;
    setCounter(result);
  };

  return (
    <div>
      {counter > 10 ? (
        <button className="button-aside" onClick={handleClick}></button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default ButtonAdd;
