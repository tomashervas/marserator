import { generateRandomByDigits, generateRandomLowNumbers } from "@/utils/operations"
import NumberRow from "./NumberRow"
import ResultRow from "./ResultRow"
import Keyboard from "./Keyboard"
import { Practice } from "@/hooks/useStore"

interface MultiplicationProps {
    numRows: number
    digits: number
    operator: string
    base: number
    keyName: keyof Practice
}
const Multiplication = ({ numRows, digits, operator, base, keyName }: MultiplicationProps) => {

    const num = generateRandomByDigits(digits)

    const result = num * base

    const carryingRow = []

    for (let index = num.toString().length - 1; index >= 0; index--) {
            const column = base * Number(num.toString()[index])
            carryingRow[index] = (column > 9) ? column.toString()[0] : " "
    }
    carryingRow.push(" ")
    // console.log(nums + " = " + result)
    //console.log('result length', result.toString().length)
    //console.log('carryingRow', carryingRow)

    return (
        <div className="flex flex-col items-end ">
            <NumberRow num={carryingRow} isOne operator={operator} />
            <NumberRow num={num.toString().split('')} isOperator={false} operator={operator} />
            <NumberRow num={base.toString().split('')} isOperator={true} operator={operator} />
            <ResultRow num={"_".repeat(result.toString().length)} result={result} keyName={keyName} operator={operator}/>
        </div>
    )
}
export default Multiplication