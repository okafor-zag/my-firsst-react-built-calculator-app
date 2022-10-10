import * as math from "mathjs";
import "./app.css";
import Button from "./components/Button";
import Input from "./components/inputs";
import { useState } from "react";

const App = () => {

const [text, setText] = useState("");
const [result, setResult] = useState("0");

const addToText =(val) => {
  setText((text) => [...text, val + ""]);
}

const resetInput = () => {
  setText("");
  setResult("");
}

const calculateResult = () => {
  const input = text.join("");

  setResult (math.evaluate(input));
}

  const buttonColor = "#f2a33c";
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input text ={text} result ={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color = {buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*"  color = {buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color = {buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="'" handleClick={addToText}/>
          <Button symbol="="  handleClick={calculateResult}/>
          <Button symbol="-" color = {buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="clear" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
