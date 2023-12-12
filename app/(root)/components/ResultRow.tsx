"use client"

import { useEffect, useState } from "react"
import DigitResult from "./DigitResult"
import Keyboard from "./Keyboard"

interface ResultProps {
    num: string
    result: number
}

const ResultRow = ({ num, result }: ResultProps) => {

    const [userResult, setUserResult] = useState<string[]>([])

    useEffect(() => {
       console.log(userResult)
       const cleanedArray = userResult.filter(char => typeof char === 'string');
       const isFilledArray = cleanedArray.length === result.toString().length
       if(isFilledArray) {
        if(userResult.join('') === result.toString()) {
            alert("Ganaste")
        } else {
            alert("Perdiste")
        }
       }
    },[userResult])


    return (
        <div className="flex justify-center border-t border-black relative">
            {num.toString().split('').map((char, index) => (
                <DigitResult key={index} char={char} setUserResult={setUserResult} index={index} />
            ))}
            
        </div>
    )
}
export default ResultRow