"use client"

import { useEffect, useRef, useState } from "react"
import DigitResult from "./DigitResult"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { Practice, useStore } from "@/hooks/useStore"

interface ResultProps {
    num: string
    result: number
    keyName: keyof Practice
    operator: string
}
const delay = async (ms: number) => new Promise(res => setTimeout(res, ms))

const ResultRow = ({ num, result, keyName, operator }: ResultProps) => {

    const [boxes, setBoxes] = useState<string[]>(num.toString().split(''))
    const router = useRouter()
    const { practiceLevel, practiceTempLevel, setPracticeTempLevel, setPracticeLevel, practiceScore, practiceBestScore, practiceBestStreak, setPracticeScore, setPracticeBestStreak, setPracticeBestScore, resetPractice, setKeyName, toNextLevel, setToNextLevel } = useStore(state => state)
    const success = useRef<HTMLAudioElement>(null)
    const levelup = useRef<HTMLAudioElement>(null)
    const fail = useRef<HTMLAudioElement>(null)
    const record = useRef<HTMLAudioElement>(null)

    //console.log('boxes length', boxes.length)
    //console.log('num length', num.length)

    useEffect(() => {
        const processResult = async () => {
            const isFilledArray = !boxes.find(char => char === '_')
            //console.log(isFilledArray, boxes)
            if (isFilledArray && boxes.join('') === result.toString()) {
                toast.success('¡Felicidades, es correcto!')
                success.current ? success.current.volume = 0.2 : null
                success.current?.play()
                await reset()
                setPracticeScore(keyName, practiceScore[keyName] + (1 * practiceLevel[keyName]))
                setPracticeBestStreak(keyName, practiceBestStreak[keyName] + 1)
                practiceBestScore[keyName] <= practiceScore[keyName] && setPracticeBestScore(keyName, practiceScore[keyName] + (1 * practiceLevel[keyName]))
                if (practiceLevel['practiceAddition'] <= 22 && practiceLevel['practiceSubtraction'] <= 7) {
                    setToNextLevel(toNextLevel - 1)
                }
                if(toNextLevel === 0) {
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + 90);
                    if (practiceTempLevel[keyName]  !== 0) {
                        setPracticeTempLevel(keyName, practiceTempLevel[keyName] + 1)
                        document.cookie = `practiceTempLevel${keyName}=${practiceTempLevel[keyName]+1}; path=/; expires=${expirationDate.toUTCString()}`
                    }
                    if ((practiceTempLevel[keyName] === practiceLevel[keyName]) || practiceTempLevel[keyName] === 0) {
                        setPracticeLevel(keyName, practiceLevel[keyName] + 1)
                        document.cookie = `practiceLevel${keyName}=${practiceLevel[keyName]+1}; path=/; expires=${expirationDate.toUTCString()}`
                    }
                    
                    setToNextLevel( practiceTempLevel[keyName] !== 0 ? practiceTempLevel[keyName] + 2 : practiceLevel[keyName] + 10)
                    levelup.current?.play()
                }
                router.refresh()

            } else if (isFilledArray) {
                toast.warning('Por favor, inténtalo de nuevo')
                fail.current ? fail.current.volume = 0.25 : null
                fail.current?.play()
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
        //console.log('Entrando a practica reseteando valores')
        resetPractice()
        if (success.current) {
            success.current.volume = 0.1;
          }
        setKeyName(keyName)
    }, [])

    const reset = async () => {
        await delay(100)
        //console.log('desde reset', num.length)
        setBoxes(num.toString().split(''))
    }


    return (
        <div>
            <div className={`flex justify-end relative ${operator === '+' && 'border-t border-black'}`}>
                {boxes.map((char, index) => (
                    <DigitResult key={index} char={char} index={index} setBoxes={setBoxes} />
                ))}

            </div>
            <div className="absolute bottom-14 right-4"> Siguiente nivel: {toNextLevel} </div>
            <audio ref={success} src="/success.mp3" />
            <audio ref={levelup} src="/levelup.mp3" />
            <audio ref={fail} src="/fail.mp3" />
            <audio ref={record} src="/record.mp3" />
        </div>
    )
}
export default ResultRow