import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="page">
      {visible && (
        <div className="clocks">
          <Clock location="NEW YORK" offset={-5} />
          <Clock location="KYIV" offset={2} />
          <Clock location="LONDON" offset={0} />
        </div>
      )}
      <button className="clear__btn" onClick={toggleVisible}>
        Clear
      </button>
    </div>
  );
};

export default App;
