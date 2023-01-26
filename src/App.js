import React, { useState } from 'react';
import DisplayEntries from './Components/Displayentries/DisplayEntries'

function App() {

  const [entries, setEntries] = useState([{weight: 174, date: '11-24-2020'}, {weight: 178, date: '11-29-2020'}])
  
  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}


export default App;
