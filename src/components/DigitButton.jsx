
// eslint-disable-next-line react/prop-types
function DigitButtons({ updateCalc, calculate }) {
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  return (
    <div className="digits">
      {createDigits()}
      <button onClick={() => updateCalc('0')}>0</button>
      <button onClick={() => updateCalc('.')}>.</button>
      <button onClick={calculate}>=</button>
    </div>
  );
}

export default DigitButtons;
