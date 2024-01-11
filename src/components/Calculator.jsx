// Import necessary dependencies
import { useState } from 'react';
import Display from './Display'; 
import OperatorButtons from './OperatorButton';  
import DigitButtons from './DigitButton';  

// Calculator component definition
function Calculator() {
  // State variables for the current calculation and result
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  // Function to update the current calculation based on button clicks
  const updateCalc = value => {
    // Check for invalid operator sequences or empty input
    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    // Update the calculation and calculate result if not an operator
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // Function to perform the final calculation
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // Function to delete the last character in the calculation
  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
  };

  // Function to clear the entire calculation
  const clearAll = () => {
    setCalc('');
    setResult('');
  };

  // Array of valid operators
  const operators = ['+', '-', '/', '*', '.'];

  // JSX rendering of the Calculator component
  return (
    <div className='calculator'>
      {/* Display component to show the current calculation and result */}
      <Display result={result} calc={calc} />

      {/* OperatorButtons component for operator-related buttons */}
      <OperatorButtons updateCalc={updateCalc} deleteLast={deleteLast} clearAll={clearAll} />

      {/* DigitButtons component for digit and equals buttons */}
      <DigitButtons updateCalc={updateCalc} calculate={calculate} />
    </div>
  );
}

// Export the Calculator component as the default export
export default Calculator;
