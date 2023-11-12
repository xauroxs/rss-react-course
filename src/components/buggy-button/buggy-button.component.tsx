import { useState } from 'react';

import './buggy-button.styles.scss';

const BuggyButton = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  if (count > 0) {
    throw new Error('Everything was broken!');
  } else {
    return (
      <button onClick={increaseCount} className="breakButton">
        Break everything!
      </button>
    );
  }
};

export default BuggyButton;
