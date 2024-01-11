
// eslint-disable-next-line react/prop-types
function OperatorButtons({ updateCalc, deleteLast, clearAll }) {
  return (
    <div className="operators">
      <button onClick={() => updateCalc('/')}>/</button>
      <button onClick={() => updateCalc('*')}>*</button>
      <button onClick={() => updateCalc('+')}>+</button>
      <button onClick={() => updateCalc('-')}>-</button>
      <button onClick={deleteLast}>DEL</button>
      <button onClick={clearAll}>AC</button>
    </div>
  );
}

export default OperatorButtons;
