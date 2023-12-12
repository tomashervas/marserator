"use client"
import { useState } from "react"

 interface DigitProps {
  char: string,
  isOne?: boolean
}

const Digit = ({char, isOne}: DigitProps) => {

   const [visible, setVisible] = useState(false)

  return (
    <div onClick={() => setVisible(!visible)} className={`m-1 p-2 text-xl text-center min-w-[44px] ${isOne && !visible ? 'opacity-0': 'opacity-100'} ${isOne && 'text-gray-500'}`}>{isOne ? '1' : char}</div>
  )
}
export default Digit