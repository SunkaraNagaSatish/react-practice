import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Popup = (props) => {
  return ReactDOM.createPortal(
    <>
      <h1>Hii</h1>
      <p>this is popup component</p>
      <button type='button' onClick={props.close} className='btn btn-secondary'>Close</button>
    </>,
    document.getElementById('sub-body')
  );
};

const App = () => {
  const [showpopup, setshowpopup] = useState(false);

  const showpop = () => {
    setshowpopup(true);
  };

  const close = () => {
    setshowpopup(false);
  };

  return (
    <>
      <div className='main-body'>
        <p>Portals example</p>
        <button onClick={showpop} className="btn btn-primary">Click me</button>
        {showpopup && <Popup close={close} />}
      </div>
    </>
  );
};

export default App;
