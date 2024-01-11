/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function Display({ result, calc }) {
    return (
      <div className="display">
        {/* Display the result in parentheses if it exists */}
        {result ? <span>({result})</span> : ''}
  
        {/* Non-breaking space for better formatting */}
        &nbsp;
  
        {/* Display the current calculation or default to "0" if it's empty */}
        {calc || "0"}
      </div>
    );
  }
  
  // Export the Display component as the default export
  export default Display;
  