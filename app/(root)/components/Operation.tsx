import { generateRandomByDigits, generateRandomLowNumbers } from "@/utils/operations"
import NumberRow from "./NumberRow"
import ResultRow from "./ResultRow"
import Keyboard from "./Keyboard"
import { Practice } from "@/hooks/useStore"

interface OperationProps {
    numRows: number
    digits: number
    operator: string,
    lowNumbers?: boolean,
    keyName: keyof Practice
}
const Operation = ({ numRows, digits, operator, lowNumbers, keyName }: OperationProps) => {

    const nums: number[] = [];
    for (let index = 0; index < numRows; index++) {
        let currentNum = lowNumbers ? generateRandomLowNumbers(digits) : generateRandomByDigits(digits);
        if (index !== 0) {
            if (operator === "-" && currentNum > nums[0]) {
                // console.log(currentNum + 'es mayor que ' + nums[0])
                while (currentNum > nums[0]) {
                    currentNum = lowNumbers ? generateRandomLowNumbers(digits) : generateRandomByDigits(digits);
                }
            }
        }
        nums.push(currentNum);
    }

    const result = operator === "+" ? nums.reduce((acc, num) => acc + num, 0) : nums[0] - nums[1]
    const carryingRow = []
    for (let index = nums[0].toString().length - 1; index >= 0; index--) {
        if (operator === "+") {
            let column = 0
            for (let i = 0; i < numRows; i++) {
                column = column + Number(nums[i].toString()[index])
            }
            if (carryingRow[index + 1]) column = column + Number(carryingRow[index + 1])
            //const column = Number(nums[0].toString()[index]) + Number(nums[1].toString()[index])
            // console.log(index, column, column.toString(), column.toString()[0])
            carryingRow[index] = (column > 9) ? column.toString()[0] : " "
        } else {
            carryingRow.push(" ")
        }
    }
    carryingRow.push(" ")
    // console.log(nums + " = " + result)
    // console.log('result length', result.toString().length)
    // console.log('carryingRow', carryingRow)

    return (
        <div className="flex flex-col items-end ">
            <NumberRow num={carryingRow} isOne operator={operator} />
            {nums.map((num, index) => (
                <NumberRow key={index} num={num.toString().split('')} isOperator={index === numRows - 1 ? true : false} operator={operator} />
            ))}
            <ResultRow num={"_".repeat(result.toString().length)} result={result} keyName={keyName} operator={operator}/>
        </div>
    )
}
export default Operation