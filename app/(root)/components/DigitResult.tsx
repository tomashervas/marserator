"use client"

import { useEffect, useState } from "react"
import Keyboard from "./Keyboard"

 interface DigitProps {
  char: string
  index: number
  setBoxes: React.Dispatch<React.SetStateAction<string[]>>
}

const DigitResult = ({char, setBoxes, index}: DigitProps) => {

   //const [digit, setDigit] = useState(char)
   const [visibleKey, setVisibleKey] = useState(false)

  return (
    <div>

    <div onClick={() => {
        setVisibleKey(!visibleKey)
    }} className={`m-1 p-2 text-xl text-center min-w-[44px] bg-white bg-opacity-20 ${visibleKey && 'animate-pulse'} rounded-md`}>{char}
    </div>
    {visibleKey && <div className="absolute top-20 right-0">
                <Keyboard setBoxes={setBoxes} setVisibleKey={setVisibleKey} index={index} />
            </div>}
    </div>

  )
}
export default DigitResult