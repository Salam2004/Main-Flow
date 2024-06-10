import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = value => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button handleClick={handleClick} value="1" />
        <Button handleClick={handleClick} value="2" />
        <Button handleClick={handleClick} value="3" />
        <Button handleClick={handleClick} value="+" />
        <Button handleClick={handleClick} value="4" />
        <Button handleClick={handleClick} value="5" />
        <Button handleClick={handleClick} value="6" />
        <Button handleClick={handleClick} value="-" />
        <Button handleClick={handleClick} value="7" />
        <Button handleClick={handleClick} value="8" />
        <Button handleClick={handleClick} value="9" />
        <Button handleClick={handleClick} value="*" />
        <Button handleClick={handleClick} value="0" />
        <Button handleClick={handleClick} value="." />
        <Button handleClick={handleEqual} value="=" />
        <Button handleClick={handleClick} value="/" />
        <Button handleClick={handleClear} value="C" />
        <Button handleClick={handleDelete} value="DEL" />
      </div>
    </div>
  );
};

export default Calculator;
