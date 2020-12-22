import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [date, setDate] = useState(0);
  var [luckyNumber, setLuckyNumber] = useState(0);
  var [result, SetResult] = useState("");
  function dateChangeHandler(event) {
    var newdate = event.target.value;
    setDate(newdate);
  }

  function luckyNo(event) {
    var newLuckyNumber = event.target.value;
    setLuckyNumber(newLuckyNumber);
  }
  function isLucky() {
    var dateAdd = 0;
    while (date > 0) {
      console.log((dateAdd = dateAdd + (date % 100)));
      date = date / 10;
    }
    console.log(dateAdd);
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
      </div>
    </div>
  );
}
