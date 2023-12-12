"use client"
import { useEffect, useState } from "react"
import Keyboard from "./Keyboard"

 interface DigitProps {
  char: string
  setUserResult: any
  index: number
}

const DigitResult = ({char, setUserResult, index}: DigitProps) => {

   const [digit, setDigit] = useState(char)
   const [visibleKey, setVisibleKey] = useState(false)

   useEffect(() => {
       if (digit!=='_') {updatePosition(index, digit)}
   }, [digit])

   const updatePosition = (index: number, newValue: string) => {
    setUserResult((prev: string[]) => {
      const newArray: string[] = [...prev]
      newArray[index] = newValue
      return newArray
    });
  };


   

  return (
    <div>

    <div onClick={() => {
        setVisibleKey(!visibleKey)
    }} className={`m-1 p-2 text-xl text-center min-w-[44px] bg-yellow-400 ${visibleKey && 'animate-pulse'} rounded-md`}>{digit}
    </div>
    {visibleKey && <div className="absolute top-20 right-0">
                <Keyboard setDigit={setDigit} setVisibleKey={setVisibleKey} />
            </div>}
    </div>

  )
}
export default DigitResult