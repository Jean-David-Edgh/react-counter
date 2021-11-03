const ButtonSub = ({ counter, setCounter }) => {
  const handleClick = () => {
    const result = counter - 1;
    setCounter(result);
  };
  return (
    <button className="button-aside" onClick={handleClick}>
      -
    </button>
  );
};

export default ButtonSub;
