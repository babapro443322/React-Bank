import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const AppProvider = ({children}) =>{
    const [theme, setTheme] = useState("dark")
    const max = 100;
    const min = 0;
    const minHomevalue = 1000000;
    const maxHomevalue = max*10000000;
    const [homeValue, setHomeValue] = useState(300000000)
    const [downPayment, setDownPayment] = useState(50000000)
    const [maxDownpayment, setMaxDownpayment] = useState(maxHomevalue)
    const [loanAmount, setLoanAmount] = useState(homeValue - downPayment)
    const [interest, setInterest] = useState(10)
    const [years, setYears] = useState(1)
    const [calculatedLoanAmount, setCalculatedLoanAmount] = useState(0);
    const [calculatedRepayment, setCalculatedRepayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(loanAmount * (interest / 100) * years);
    const [simpleTotalRepayment, setSimpleTotalRepayment] = useState(loanAmount + totalInterest);
    return(
        <ThemeContext.Provider value ={{
            theme, setTheme,
            max, min,
            maxHomevalue, minHomevalue,
            homeValue, setHomeValue,
            downPayment, setDownPayment,
            maxDownpayment, setMaxDownpayment,
            loanAmount, setLoanAmount,
            interest, setInterest, 
            years, setYears,
            totalInterest, setTotalInterest,
            simpleTotalRepayment, setSimpleTotalRepayment,
            calculatedLoanAmount, setCalculatedLoanAmount,
            calculatedRepayment, setCalculatedRepayment
            }}>
            {children}
        </ThemeContext.Provider>
    )
}