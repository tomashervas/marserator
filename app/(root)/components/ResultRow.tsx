"use client"

import { useEffect, useState } from "react"
import DigitResult from "./DigitResult"
import Keyboard from "./Keyboard"
import { toast } from "react-toastify"

interface ResultProps {
    num: string
    result: number
}

const ResultRow = ({ num, result }: ResultProps) => {

    const [boxes, setBoxes] = useState(num.toString().split(''))

    useEffect(() => {
    const isFilledArray = !boxes.find(char => char === '_')
    console.log(isFilledArray, boxes)
       if(isFilledArray) {
        if(boxes.join('') === result.toString()) {
           toast.success('¡Felicidades, es correcto!')
        } else {
            reset()
            toast.warning('Por favor, inténtalo de nuevo')
       }
    }
    },[boxes])

    const reset = () => {
        setBoxes(num.toString().split(''))
    }


    return (
        <div className="flex justify-center border-t border-black relative">
            {boxes.map((char, index) => (
                <DigitResult key={index} char={char} index={index} setBoxes={setBoxes} />
            ))}
            
        </div>
    )
}
export default ResultRow