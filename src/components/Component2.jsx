import { ChartJS } from "./ChartJS"
import { Inputs } from "./Inputs"

export const Component2 = () => {

  return (
   <>
   <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
    <Inputs  />
    <ChartJS />
   </div>
   </>
  )
}
