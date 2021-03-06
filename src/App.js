import React, { useEffect } from 'react';

// import Styles from './assets/styles';
import Calculator from './Calculator';

function App() {
  useEffect(() => {
    document.title = 'Basic Calculator';
  }, []);

  return ( 
    <Calculator />
  );
}

export default App;