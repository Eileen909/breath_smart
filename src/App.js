import React, {useState} from 'react';
import './App.css'; 

const App = () => { 
  const[modelOpen, setModelOpen]=useState(false);
  const[clickedBox, setClickedBox]=useState("");  
  const handleClickedBox=(boxId)=>{
    console.log(`onClick invoked!-${boxId}`);
    setClickedBox(boxId);
    setModelOpen(true);
  };
  const modelClose=()=>{
    setModelOpen(false);
    setClickedBox("");
  };

  return (
    <div className="app-container">
      <h1>breath smart</h1>
      <div className="container">
        <button className="box" id="box1" onClick={()=> handleClickedBox("Box1 Clicked")}>All Types</button>
        <button className="box" id="box2" onClick={()=> handleClickedBox("Box2 Clicked")}>Wim-Hof</button>
        <button className="box" id="box3" onClick={()=> handleClickedBox("Box3 Clicked")}>Box Breathing</button>
        <button className="box" id="box4" onClick={()=> handleClickedBox("Box4 Clicked")}>Tumo Breathing</button>
        <button className="box" id="box5" onClick={()=> handleClickedBox("Box5 Clicked")}>Focus</button>
        <button className="box" id="box6" onClick={()=> handleClickedBox("Box6 Clicked")}>Sleep</button>
        <button className="box" id="box7" onClick={()=> handleClickedBox("Box7 Clicked")}>Calm</button>
      </div>

      <p>Choose your breathing style</p>
    </div>
  );
};

export default App;