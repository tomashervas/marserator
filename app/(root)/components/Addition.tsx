import { generateRandomByDigits } from "@/utils/operations"
import NumberRow from "./NumberRow"
import ResultRow from "./ResultRow"
import Keyboard from "./Keyboard"

interface AdditionProps {
    numRows: number
    digits: number

}
const Addition = ({numRows, digits}: AdditionProps) => {
    const nums = Array(numRows).fill(0).map(()=> generateRandomByDigits(digits))
    const result = nums.reduce((acc, num) => acc + num, 0)
    console.log(nums + " = " + result)
  return (
    <div className="flex flex-col items-end">
        <NumberRow num={generateRandomByDigits(digits)} isOne />
        { nums.map((num, index) => (
            <NumberRow key={index} num={num} isOperator={index === numRows - 1 ? true : false} operator="+" />
        ))}
        <ResultRow num={"_".repeat(result.toString().length)} result={result}  />
    </div>
  )
}
export default Addition