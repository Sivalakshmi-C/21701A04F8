import React from 'react';
import Even from './components/Even';
import Flequest from './components/Flequest';
import Random from './components/Random';

const App=() => {
  return (
   <div>
    <h1>API Testing Frontend</h1>
    <Even/>
    <Flequest/>
    <Random/>
   </div>
  );
}

export default App;
