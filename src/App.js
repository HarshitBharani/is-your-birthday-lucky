import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [date, setDate] = useState(0);
  var dateAdd = 0;
  var out;
  var [luckyNumber, setLuckyNumber] = useState(0);
  
  function dateChangeHandler(event) {
    var newdate = event.target.value;
    setDate(newdate);
  }
  

  function luckyNo(event) {
    var newLuckyNumber = event.target.value;
    setLuckyNumber(newLuckyNumber);
    console.log(luckyNumber);
  }
  function output(){
    
    

    }
  
  function isLucky() {
    var result= 0 ;
    while (date > 0) {
    dateAdd = dateAdd + Math.floor(date % 10);
    date= date/10 ;
    }
     result= dateAdd%luckyNumber
     var out;
     if(result===0){
          out= "Hey your date of birth is lucky";
     }else{
       out= "sorry your death of birth doesnt match with your lucky no " ;
     }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        onChange={() => dateChangeHandler(event)}
        className="input-text"
        placeholder="pls input your date of birth in DDMMYYYY format"
      ></input>
      <input
        onChange={() => luckyNo(event)}
        className="input-text"
        placeholder="pls input your lucky number between 1 to 10"
      ></input>
      <div>
        {" "}
        <button onClick={() => isLucky()}>clickme </button>
        <h1>{out}</h1>
      </div>
    </div>
  );
}
