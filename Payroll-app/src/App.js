import React from 'react'; // Must be imported for webpack to work
import './App.css';
import CardDemo from './card';

function App() {
  return (
    <div className="HeaderApp">
      <div>Payroll</div>
      <CardDemo />
    </div>
  );
}

export default App;