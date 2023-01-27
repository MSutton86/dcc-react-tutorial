import React, { useState } from 'react';
import DisplayEntries from './Components/Displayentries/DisplayEntries'
import AddEntryForm from './Components/AddEntry/AddEntryForm'
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{weight: 174, date: '11-24-2020'}, {weight: 178, date: '11-29-2020'}])
  
  function addNewEntry(entry){
    
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Weight
        <small className='text-muted'>Tracker</small></h3>
        <div className='cole-md-6'>
          <div className='border-box'>
      <AddEntryForm addNewEntry={addNewEntry}/>
          </div>
          <div className='border-box'>
      <DisplayEntries parentEntries={entries} />
          </div>
        </div>
        <div className='col-md-6'>
        <div className='border-box'>
      <EntriesChartTracker parentEntries={parentEntries}/>
        </div>
        </div>
      </div>
    </div>
  );
}


export default App;
