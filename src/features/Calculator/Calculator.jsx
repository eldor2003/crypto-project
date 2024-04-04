import {useEffect, useState} from "react";
import {
  Box
} from "@mui/material";
import Amount from "./Amount.jsx";
import Top from "./Top.jsx";
import Laps from "./Laps.jsx";
import Result from "./Result.jsx";
import Bottom from "./Bottom.jsx";

const CalculatorForm = () => {
  const cellCost = 20;
  const cellProfit = 0.02;
  
  const [amount, setAmount] = useState(cellCost);
  const [laps, setLaps] = useState(1);
  const [result, setResult] = useState();
  
  const handleAmountChange = (event) => {
    const val = parseInt(event.target.value);
    console.log(val)
    if (val < 0) {
      setAmount(cellCost);
    } else if (!val) {
      setAmount(val)
      setResult(0)
    } else if (val < cellCost) {
      setAmount(val)
      setResult(0)
    } else {
      setAmount(val);
    }
  };
  
  const handleLapsChange = (event) => {
    const val = parseInt(event.target.value);
    console.log({
      laps,
      amount
    })
    if (val < 1) {
      setLaps(1);
    } else if (!val) {
      setLaps(val)
      setResult(0)
    } else {
      setLaps(val)
    }
  };
  
  const calculateResult = () => {
    console.log(amount, laps)
    if (!amount || !laps || amount < cellCost) {
      console.log('ret-')
      setResult(0)
      return;
    }
    const cellsAmount = Math.floor(amount / cellCost);
    
    // Calculate the result
    const result = (
      cellCost +
      cellCost * (cellProfit ** laps) * cellsAmount
    ).toFixed(2);
    
    // Calculate the final result by adding tonAmount
    const finalResult = parseFloat(result) + amount;
    // const finalResult = (parseFloat(result) + amount).toFixed(2);
    console.log(finalResult)
    
    return Number(finalResult).toFixed(2);
  }
  
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    setResult(calculateResult());
  }, [amount, laps]);
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: '5px',
        borderRadius: '5px',
        backgroundColor: 'hsla(240, 14%, 12%, 0.35)',
        // backgroundColor: '#1A1D25',
        padding: '20px',
        // alignItems: "center",
        mt: 5,
        minWidth: '560px'
      }}
    >
      <Top />
      
      <Amount
        cellCost={cellCost}
        amount={amount}
        setAmount={setAmount}
        handleAmountChange={handleAmountChange}
      />
      
      <Laps
        laps={laps}
        handleLapsChange={handleLapsChange}
      />
      
      <Result
        result={result}
      />
      
      <Bottom />
      
    </Box>
  );
};

export default CalculatorForm;