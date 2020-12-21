import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [date, setDate] = useState("");
  var [luckyNumber, setLuckyNumber] = useState(0);
  function dateChangeHandler(event) {
    var newdate = event.target.value;
    setDate(newdate);
  }

  function luckyNo(event) {
    var newLuckyNumber = event.target.value;
    setLuckyNumber(newLuckyNumber);
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
      {date}
      {luckyNumber}
    </div>
  );
}
