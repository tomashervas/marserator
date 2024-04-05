import { useStore } from "@/hooks/useStore"
import Operation from "../../components/Operation"
import Score from "../../components/Score"
import { useEffect, useState } from "react"
import { calculateLevelAddition } from "@/utils/operations"
import { cookies } from "next/headers"

const AdditionPage = () => {
    
    const cookieStore = cookies()
    const level = cookieStore.get('practiceLevelpracticeAddition')?.value || 1
    const tempLevel = cookieStore.get('practiceTempLevelpracticeAddition')?.value
    const levelParams = calculateLevelAddition(Number(tempLevel ? tempLevel : level))
    console.log('tempLevel: ', tempLevel, 'level: ', level)
    console.log('levelParams: ', levelParams)

    return (
        <div className="flex-1">
            <h1 className="text-xl text-center">Sumas</h1>
            { tempLevel && level !== tempLevel &&
                <h2 className="p-4 text-center">Tu nivel es {level} pero estás practicando con un nivel {tempLevel} puedes volver a cambiarlo desde el menú</h2>
            }
            <div className="flex flex-col items-center p-8">
                <Operation numRows={levelParams.numRows} digits={levelParams.digits} operator="+" lowNumbers={levelParams.lowNumbers} keyName="practiceAddition"/>
                {/* <Operation numRows={2} digits={1} operator="+" lowNumbers={false} keyName="practiceAddition"/> */}
            </div>
            <Score keyName="practiceAddition"/>
        </div>
    )
}
export default AdditionPage