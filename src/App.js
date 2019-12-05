import React from 'react';
import './assets/css/argon-dashboard-react.min.css';
import Card from "./Card"

function App() {
  return (
    <div className="d-flex align-items-center full">
      <div className="container" style={{padding:"10%"}}>
        <Card/>
      </div>
    </div>
  );
}

export default App;
