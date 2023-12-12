"use client"

import { generateRandomByDigits } from "@/utils/operations"
import Digit from "./Digit"

interface NumberProps {
    num: number,
    isOne?: boolean,
    isOperator?: boolean,
    operator?: string
}
const NumberRow = ({num, isOne, isOperator, operator}: NumberProps) => {

  
  return (
        <div className="flex justify-center">
        {isOperator && (
          <div className="p-2 text-xl">{operator}</div>
        )}
        {num.toString().split('').map((char, index) => (
            <Digit key={index} char={char} isOne={isOne}/>
        ))} 
      </div>

  )
}
export default NumberRow