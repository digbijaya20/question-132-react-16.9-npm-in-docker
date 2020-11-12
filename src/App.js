
import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  //const inputRef = useRef(null);

  //useEffect(()=> inputRef.current.focus())

  const handleClick = (e) => {
    if(result ===0){
      setResult(e.target.name)
    }
    else{
      setResult(result.concat(e.target.name))
    }
  };
  const handleBack = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const handleClear = () => {
    setResult(0)
   
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Math Error");
    }
  };

  return (
    <div className="calc-app">
      <form>
        <input id="result" type="text" value={result} />
      </form>
      <div className="keypad">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="delete" onClick={handleBack}>
          DELETE
        </button>
        <button id="equal" onClick={calculate}>
          =
        </button>
        <button className="operation" id="add" name="+" onClick={handleClick}>
          +
        </button>
        <button id="7" name="7" onClick={handleClick}>
          7
        </button>
        <button id="8" name="8" onClick={handleClick}>
          8
        </button>
        <button id="9" name="9" onClick={handleClick}>
          9
        </button>
        <button
          className="operation"
          id="subtract"
          name="-"
          onClick={handleClick}
        >
          -
        </button>
        <button id="4" name="4" onClick={handleClick}>
          4
        </button>
        <button id="5" name="5" onClick={handleClick}>
          5
        </button>
        <button id="6" name="6" onClick={handleClick}>
          6
        </button>
        <button
          className="operation"
          id="multiply"
          name="*"
          onClick={handleClick}
        >
          *
        </button>
        <button id="1" name="1" onClick={handleClick}>
          1
        </button>
        <button id="2" name="2" onClick={handleClick}>
          2
        </button>
        <button id="3" name="3" onClick={handleClick}>
          3
        </button>
        <button
          className="operation"
          id="divide"
          name="/"
          onClick={handleClick}
        >
          /
        </button>
        <button id="0" className="xe" name="0" onClick={handleClick}>
          0
        </button>
        <button id="dot" name="." onClick={handleClick}>
          .
        </button>
        <button
          className="operation"
          id="percentile"
          name="%"
          onClick={handleClick}
        >
          %
        </button>
      </div>
    </div>
  );
}

export default App;


/*
import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  //const inputRef = useRef(null);

  //useEffect(()=> inputRef.current.focus())

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const handleBack = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const handleClear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calc-app">
      <form>
        <input id="result" type="text" value={result} />
      </form>
      <div className="keypad">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="delete" onClick={handleBack}>
          DELETE
        </button>
        <button id="equal" onClick={calculate}>
          =
        </button>
        <button className="operation" id="add" name="+" onClick={handleClick}>
          +
        </button>
        <button id="7" name="7" onClick={handleClick}>
          7
        </button>
        <button id="8" name="8" onClick={handleClick}>
          8
        </button>
        <button id="9" name="9" onClick={handleClick}>
          9
        </button>
        <button
          className="operation"
          id="subtract"
          name="-"
          onClick={handleClick}
        >
          -
        </button>
        <button id="4" name="4" onClick={handleClick}>
          4
        </button>
        <button id="5" name="5" onClick={handleClick}>
          5
        </button>
        <button id="6" name="6" onClick={handleClick}>
          6
        </button>
        <button
          className="operation"
          id="multiply"
          name="*"
          onClick={handleClick}
        >
          *
        </button>
        <button id="1" name="1" onClick={handleClick}>
          1
        </button>
        <button id="2" name="2" onClick={handleClick}>
          2
        </button>
        <button id="3" name="3" onClick={handleClick}>
          3
        </button>
        <button
          className="operation"
          id="divide"
          name="/"
          onClick={handleClick}
        >
          /
        </button>
        <button id="0" className="xe" name="0" onClick={handleClick}>
          0
        </button>
        <button id="dot" name="." onClick={handleClick}>
          .
        </button>
        <button
          className="operation"
          id="percentile"
          name="%"
          onClick={handleClick}
        >
          %
        </button>
      </div>
    </div>
  );
}

export default App;


*/
