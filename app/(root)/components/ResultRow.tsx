"use client"

import { useEffect, useState } from "react"
import DigitResult from "./DigitResult"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { Practice, useStore } from "@/hooks/useStore"

interface ResultProps {
    num: string
    result: number
    keyName: keyof Practice
}
const delay = async (ms: number) => new Promise(res => setTimeout(res, ms))

const ResultRow = ({ num, result, keyName }: ResultProps) => {

    const [boxes, setBoxes] = useState<string[]>(num.toString().split(''))
    const router = useRouter()
    const { practiceLevel, setPracticeLevel, practiceScore, practiceBestScore, practiceBestStreak, setPracticeScore, setPracticeBestStreak, setPracticeBestScore, resetPractice } = useStore(state => state)
    const [toNextLevel, setToNextLevel] = useState(practiceLevel[keyName] + 2)
    console.log('boxes length', boxes.length)
    console.log('num length', num.length)

    useEffect(() => {
        const processResult = async () => {
            const isFilledArray = !boxes.find(char => char === '_')
            console.log(isFilledArray, boxes)
            if (isFilledArray && boxes.join('') === result.toString()) {
                toast.success('¡Felicidades, es correcto!')
                router.refresh()
                await reset()
                setPracticeScore(keyName, practiceScore[keyName] + (1 * practiceLevel[keyName]))
                setPracticeBestStreak(keyName, practiceBestStreak[keyName] + 1)
                practiceBestScore[keyName] <= practiceScore[keyName] && setPracticeBestScore(keyName, practiceScore[keyName] + (1 * practiceLevel[keyName]))
                setToNextLevel(toNextLevel - 1)
                if(toNextLevel === 0) {
                    setPracticeLevel(keyName, practiceLevel[keyName] + 1)
                    setToNextLevel(practiceLevel[keyName] + 2)
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + 90);
                    document.cookie = `practiceLevel${keyName}=${practiceLevel[keyName]+1}; path=/; expires=${expirationDate.toUTCString()}`
                }

            } else if (isFilledArray) {
                toast.warning('Por favor, inténtalo de nuevo')
                await delay(1000)
                await reset()
                setPracticeBestStreak(keyName, 0)
            }

        }
        processResult()
    }, [boxes])

    useEffect(() => {
        const processReset = async () => {
            await reset()
        }
        processReset()
    }, [num, result])



    useEffect(() => {
        console.log('Entrando a practica reseteando valores')
        resetPractice()
    }, [])

    const reset = async () => {
        await delay(100)
        console.log('desde reset', num.length)
        setBoxes(num.toString().split(''))
    }


    return (
        <div>
            <div className="flex justify-end border-t border-black relative">
                {boxes.map((char, index) => (
                    <DigitResult key={index} char={char} index={index} setBoxes={setBoxes} />
                ))}

            </div>
            <div className="absolute bottom-14 right-4"> Siguiente nivel: {toNextLevel} </div>
        </div>
    )
}
export default ResultRow