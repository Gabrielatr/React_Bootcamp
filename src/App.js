
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';

let ON = true;

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const turnOn = () => {
    const b = document.querySelectorAll("Button");

    if(ON){
      ON = false;
      console.log(ON);
      b.forEach((item) => {
        if(item.innerHTML !== "Off"){
          item.disabled = true;
          item.style.cssText += "opacity: 60%";
        }else{
          item.innerHTML = "On";
        }
      });
      handleClearInput();
      setCurrentNumber("...Desligado");
    }else{
      ON = true;
      b.forEach((item) => {
        if(item.innerHTML !== "On"){
          item.disabled = false;
          item.style.cssText += "opacity: 100%";
        }else{
          item.innerHTML = "Off";
        }
      });
      setCurrentNumber('0');
    }
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleErase = () => {
    const numbers = String(currentNumber);
    const newNumber = numbers.substring(0, numbers.length-1);
    setCurrentNumber(`${newNumber}`);
  };

  const handleConvertPercentage = () => {
    setCurrentNumber(currentNumber/100);
  };

  const handleClearInput = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
  };

  const handleSetOperator = (operator) => {
    setFirstNumber(currentNumber);
    setOperator(operator);
    handleClearInput();
  };

  const handleCalculation = () => {
    switch(operator){
      case '+':
        setCurrentNumber(Number(firstNumber) + Number(currentNumber));
        break;
      case '-':
        setCurrentNumber(Number(firstNumber) - Number(currentNumber));
        break;
      case '/':
        setCurrentNumber(Number(firstNumber) / Number(currentNumber));
        break;
      case '*':
        setCurrentNumber(Number(firstNumber) * Number(currentNumber));
        break;
      default:

    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} disabled />
        <br />
        
        <Column>
          <Row>
            <Button valor="%" event={handleConvertPercentage} />
            <Button valor="CE" event={handleClearInput} />
            <Button valor="C" event={handleErase} />
            <Button valor="Off" event={turnOn} />
          </Row>
          <Row>
            <Button class="btn" valor="7" event={() => handleAddNumber('7')} />
            <Button valor="8" event={() => handleAddNumber('8')} />
            <Button valor="9" event={() => handleAddNumber('9')} />
            <Button valor="/" event={() => handleSetOperator('/')} />
          </Row>
          <Row>
            <Button valor="4" event={() => handleAddNumber('4')} />
            <Button valor="5" event={() => handleAddNumber('5')} />
            <Button valor="6" event={() => handleAddNumber('6')} />
            <Button valor="*" event={() => handleSetOperator('*')} />
          </Row>
          <Row>
            <Button valor="1" event={() => handleAddNumber('1')} />
            <Button valor="2" event={() => handleAddNumber('2')} />
            <Button valor="3" event={() => handleAddNumber('3')} />
            <Button valor="-" event={() => handleSetOperator('-')} />
          </Row>
          <Row>
            <Button valor="0" event={() => handleAddNumber('0')} />
            <Button valor="." event={() => handleAddNumber('.')} />
            <Button valor="=" event={handleCalculation} />
            <Button valor="+" event={() => handleSetOperator('+')} />
          </Row>
        </Column>
      </Content>
    </Container>
  );
}

export default App;
