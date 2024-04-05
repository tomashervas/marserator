"use client"

import { Practice, useStore } from "@/hooks/useStore"
import { useEffect, useState } from "react"

interface ScoreProps {
    keyName: keyof Practice
}


const Score = ({ keyName }: ScoreProps) => {
    const {practiceLevel, setPracticeLevel, practiceScore, practiceBestScore, practiceBestStreak} = useStore(state=>state)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)  
    },[])

    if(!mounted) return null

  return (
    <div className="absolute bottom-14 left-4">
        {/* <button onClick={ () => setPracticeLevel(keyName, practiceLevel[keyName]+1)}>+1</button> */}
        <p>Nivel: {practiceLevel[keyName]}</p>
        <p>Puntuación: {practiceScore[keyName]}</p>
        <p>Récord: {practiceBestScore[keyName]}</p>
        <p>Mejor racha: {practiceBestStreak[keyName]}</p>
    </div>
  )
}
export default Score