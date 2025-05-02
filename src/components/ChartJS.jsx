import { useContext } from "react"
import { ThemeContext } from "../assets/context/context"
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export const ChartJS = () => {
  const { calculatedRepayment, calculatedLoanAmount } = useContext(ThemeContext)

  const data = {
    labels: ['Repayment', 'Loan amount'],
    datasets: [
      {
        label: '',
        data: [ calculatedRepayment, calculatedLoanAmount ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

return (
  <div className=" w-[90vw] sm:w-[40vw] h-auto">
    <Doughnut data = {data} options={{maintainAspectRatio: true}}/>
  </div>
);
}