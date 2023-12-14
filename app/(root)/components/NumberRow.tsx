"use client"

import { generateRandomByDigits } from "@/utils/operations"
import Digit from "./Digit"

interface NumberProps {
    num: (string | undefined)[],
    isOne?: boolean,
    isOperator?: boolean,
    operator?: string
}
const NumberRow = ({num, isOne, isOperator, operator}: NumberProps) => {

  if(isOne) console.log(operator)
  
  return (
        <div className="flex justify-center">
        {isOperator && (
          <div className="p-2 text-xl">{operator}</div>
        )}
        {num.map((char, index) => (
            <Digit key={index} char={char} isOne={isOne} operator={operator}/>
        ))} 
      </div>

  )
}
export default NumberRow