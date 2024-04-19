"use client"
import { useStore } from "@/hooks/useStore"
import { useEffect, useState } from "react"

 interface DigitProps {
  char: string | undefined,
  isOne?: boolean,
  operator?: string
}

const Digit = ({char, isOne, operator}: DigitProps) => {

    // if(isOne) console.log(operator)
  //  const [visible, setVisible] = useState(false)
    const {isVisibleCarring, setIsVisibleCarring} =  useStore( state => state)
   const oneChar = isOne && (operator === '-' ? '-1' : char)


  return (
    <div onClick={() => setIsVisibleCarring(!isVisibleCarring)} className={`m-1 p-2 text-xl text-center min-w-[44px] ${isOne && !isVisibleCarring ? 'opacity-0': 'opacity-100'} ${isOne && 'text-gray-500'}`}>{isOne ? oneChar : char}</div>
  )
}
export default Digit