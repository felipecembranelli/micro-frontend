import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Payroll = lazy(() => import('PayrollApp/Payroll'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
        <Payroll />
      </Suspense>
      {/* <div className="container">Demo home page</div> */}
    </div>
  );
}

export default App;
