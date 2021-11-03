const ResetButton = ({ counter, setCounter }) => {
  const handleClick = () => {
    const result = counter - counter;
    setCounter(result);
  };
  return (
    <button className="reset-button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
