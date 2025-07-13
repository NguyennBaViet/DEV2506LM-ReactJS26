import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/jsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import Func_Hvt_x from './components/Func_Hvt_x';

function App() {
  return (
    <div className="App">
      
      <JsxExpression />
      <hr/>
      <h2 className='alert alert-success'>Component</h2>
      <FuncComp />
      <FuncComp name="Việt" Company="Devmaster" />
      <hr />
      <FuncComp1 name="Mois" Company="Devmaster" />
      <hr />
      <Func_Hvt_x />
    </div>
  );
}

export default App;
