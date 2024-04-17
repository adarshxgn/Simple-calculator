import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material'
function App() {

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipleInvalid, setIsPrincipleInvalid] = useState(false)
  const [isYearInvalid, setIsYearInvalid] = useState(false)
  const [isRateInvalid, setIsRateInvalid] = useState(false)
  const [interest,setInterest] = useState()

  const handleInputValidation = (tag) => {
    const { name, value } = tag
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      if (name == "principle") {
        setPrinciple(value)
        setIsPrincipleInvalid(false)
      } else if (name == "rate") {
        setRate(value)
        setIsRateInvalid(false)
      }
      else {
        setYear(value)
        setIsYearInvalid(false)
      }
    } else {
      if (name == "principle") {
        setPrinciple(value)
        setIsPrincipleInvalid(true)
      }
      else if (name == "rate") {
        setRate(value)
        setIsRateInvalid(true)
      }
      else {
        setYear(value)
        setIsYearInvalid(true)
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please complete the form completely")
    }
    // console.log("calculate button clicked");
  }

  const handleReset= ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  } 

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded' >
        <h2>
          Simple calculator
        </h2>
        <p>Calculate your simple interst Easly</p>
        <div className='d-flex justify-content-center align-items-center bg-primary p-3 rounded flex-column'>
          <h1>₹{interest || 0}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3'>
            <TextField name='principle' value={principle || "" } onChange={e => handleInputValidation(e.target)} className='w-100' id="principle" label="₹ Principal Amount" variant="filled" />
          </div>
          {
              isPrincipleInvalid &&
              <div className='mb-4 text-danger'>Invalid Principle Amount</div>
            }
          
          <div className='mb-3'>
            <TextField name='rate' value={rate || ""} onChange={e => handleInputValidation(e.target)} className='w-100' id="rate" label="Rate of interest (p.a) %" variant="filled" />
            {
              isRateInvalid &&
              <div className='mb-4 text-danger'>Invalid Rate Amount</div>
            }
            
          </div>
          <div className='mb-3'>
            <TextField name='year' value={year || ""} onChange={e => handleInputValidation(e.target)} className='w-100' id="year" label="Time period (Yr)" variant="filled" />
            {
              isYearInvalid &&
              <div className='mb-4 text-danger'>Invalid Year</div>
            }
          
          </div>
          <Stack direction='row' spacing={2}>
            <Button type='submit' onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>    
    </div>
  )
}

export default App
