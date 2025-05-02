import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../assets/context/context';

export const Inputs = () => {
    const {
            max, min,
            maxHomevalue, minHomevalue,
            homeValue, setHomeValue,
            downPayment, setDownPayment,
            maxDownpayment, setMaxDownpayment,
            loanAmount, setLoanAmount,
            interest, setInterest,
            years, setYears,
            setSimpleTotalRepayment,
            setCalculatedLoanAmount,
            setCalculatedRepayment
            } = useContext(ThemeContext)
    useEffect(()=>{
      setMaxDownpayment(homeValue)
    },[homeValue])
    useEffect(()=>{
      setLoanAmount(homeValue - downPayment)
    },[downPayment])
    const handleCheck = () =>{
      const loan = Number(homeValue) - Number(downPayment);
      const rate = Number(interest);
      const total = loan * (rate / 100) * Number(years);
      const repayment = loan + total;

      setCalculatedLoanAmount(loan);
      setCalculatedRepayment(repayment);
    }
  return (
    <div  className="w-[50vw]" >
    <div className='mt-10'>
    <div>
    <div className='inline-flex items-center space-x-2'>
    <p className='text-sm'> {minHomevalue} </p><input type="range" step={10000000} max={maxHomevalue} min={minHomevalue} value={homeValue}
    className=" range range-info w-[60vw] sm:w-[34vw] "
    onChange={(e)=> setHomeValue(Number(e.target.value))}/> <p className='text-sm'> {maxHomevalue} </p>
    </div>
    <h2 className='text-2xl'> Home value: {homeValue} </h2>
    </div>
    </div>
    <div className='mt-10'>
    <div>
    <div className='inline-flex items-center space-x-2'>
    <p className='text-sm'> {minHomevalue} </p><input type="range" step={10000000} max={maxDownpayment} min={minHomevalue} value={downPayment}
    className=" range range-info w-[60vw] sm:w-[34vw] "
    onChange={(e)=> setDownPayment(Number(e.target.value))}/> <p className='text-sm'> {maxDownpayment} </p>
    </div>
    <h2 className='text-2xl'> Down Payment: {downPayment} </h2>
    </div>
    </div>
    <div className='mt-10'>
    <div>
    <div className='inline-flex items-center space-x-2'>
    <p className='text-sm'> {minHomevalue} </p><input type="range" step={10000000} max={maxDownpayment} min={minHomevalue} value={loanAmount}
    className=" w-[60vw] sm:w-[34vw] range range-info "
    onChange={(e)=> setLoanAmount(Number(e.target.value))}/> <p className='text-sm'> {maxDownpayment} </p>
    </div>
    <h2 className='text-2xl'> Loan amount : {loanAmount} </h2>
    </div>
    </div>
    <div className='mt-10'>
    <div>
    <div className='inline-flex items-center space-x-2'>
    <p className='text-sm'> {min} </p><input type="range" step={5} max={max} min={min} value={interest}
    className=" range range-info w-[75vw] sm:w-[40vw] "
    onChange={(e)=> setInterest(Number(e.target.value))}/> <p className='text-sm'> {max} </p>
    </div>
    <h2 className='text-2xl'> interest: {interest}% </h2>
    </div>
    </div>
      <div className='mt-10'>
        <label className='flex '>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Tenure</legend>
            <select className="select rounded-xl w-[60vw] sm:w-[30vw] " value={years} onChange={(e)=> setYears(Number(e.target.value))} >
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="5">5 Years</option>
                <option value="10">10 Years</option>
           </select>
          </fieldset>
              <button onClick={handleCheck} className='btn btn-outline btn-info rounded-xl mt-8 ml-7 w-[25vw] sm:w-[10vw] ' type='submit'>Check</button>
        </label>
      </div>
    </div>
  )
}
