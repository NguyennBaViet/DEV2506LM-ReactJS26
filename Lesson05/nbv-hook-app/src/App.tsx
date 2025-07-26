import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateDemo from './component/UseStateDemo';
import UseEffectDemo from './component/UseEffectDemo';
import ExampleContext from './component/ExampleContext';
import Bai1 from './Labguide/Bai1';
import Bai3 from './Labguide/Bai3';
import Bai2 from './Labguide/Bai2';
import Bai7, { ThemeComponent } from './Labguide/Bai7';
import Bai4 from './Labguide/Bai4';
import Bai5 from './Labguide/Bai5';
import Bai6 from './Labguide/Bai6';

function App() {
  return (
    <div className="container border">
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <ExampleContext />
      <hr />
      <Bai1 />
      <hr />
      <Bai2 />
      <hr />
      <Bai3 />
      <hr />
      <Bai4 />
      <hr />
      <Bai5 />
      <hr />
      <Bai6 />
      <hr />
      <Bai7>
        <ThemeComponent />
      </Bai7>
    </div>
  );
}
export default App;
