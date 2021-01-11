import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [date, setDate] = useState(0);
  var dateAdd = 0;
  var [out, setOut] = useState("");
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

  function isLucky() {
    var result = 0;
    while (date > 0) {
      dateAdd = dateAdd + Math.floor(date % 10);
      date = date / 10;
    }
    result = dateAdd % luckyNumber;

    if (result === 0) {
      setOut("Hey your date of birth is lucky");
    } else {
      setOut("sorry your death of birth doesnt match with your lucky no ");
    }
    return out;
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <span class="javascript">
            <li>
              <a href="https://priceless-panini-117643.netlify.app">
                javascript
              </a>
            </li>
          </span>
          <span class="react">
            {" "}
            <li>
              <a href="https://smizy.csb.app/">react</a>
            </li>
          </span>
        </ul>
      </nav>
      <h1 class="birthday">Is your birthday lucky</h1>
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
