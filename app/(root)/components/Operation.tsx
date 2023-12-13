import { generateRandomByDigits } from "@/utils/operations"
import NumberRow from "./NumberRow"
import ResultRow from "./ResultRow"
import Keyboard from "./Keyboard"

interface OperationProps {
    numRows: number
    digits: number
    operator: string
}
const Operation = ({ numRows, digits, operator }: OperationProps) => {

    const nums: number[] = [];
    for (let index = 0; index < numRows; index++) {
        let currentNum = generateRandomByDigits(digits);
        if (index !== 0) {
            if(operator === "-" && currentNum > nums[0]) {
                console.log(currentNum +  'es mayor que ' +  nums[0])
                while (currentNum > nums[0]) {
                    currentNum = generateRandomByDigits(digits);
                }
            }
        }
        nums.push(currentNum);
    }

    const result = operator === "+" ? nums.reduce((acc, num) => acc + num, 0) : nums[0] - nums[1]
    console.log(nums + " = " + result)

    return (
        <div className="flex flex-col items-end">
            <NumberRow num={"1".repeat(result.toString().length)} isOne operator={operator}/>
            {nums.map((num, index) => (
                <NumberRow key={index} num={num.toString()} isOperator={index === numRows - 1 ? true : false} operator={operator} />
            ))}
            <ResultRow num={"_".repeat(result.toString().length)} result={result} />
        </div>
    )
}
export default Operation