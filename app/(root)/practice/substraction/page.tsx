import { useStore } from "@/hooks/useStore"
import Operation from "../../components/Operation"
import Score from "../../components/Score"
import { useEffect, useState } from "react"
import { calculateLevelSubtraction } from "@/utils/operations"
import { cookies } from "next/headers"
import Image from "next/image"

const SubstractionPage = () => {
    const cookieStore = cookies()
    const level = cookieStore.get('practiceLevelpracticeSubtraction')?.value || 1
    const tempLevel = cookieStore.get('practiceTempLevelpracticeSubtraction')?.value
    const levelParams = calculateLevelSubtraction(Number(tempLevel ? tempLevel : level))
    // console.log('tempLevel: ', tempLevel, 'level: ', level)
    // console.log('levelParams: ', levelParams)

    return (
        <div className="flex-1">
            <h1 className="text-xl text-center">Restas</h1>
            { tempLevel && level !== tempLevel &&
                <h2 className="p-4 text-center">Tu nivel es {level} pero estás practicando con un nivel {tempLevel} puedes volver a cambiarlo desde el menú</h2>
            }
            <div className="flex flex-col items-center p-8">
                <Operation numRows={levelParams.numRows} digits={levelParams.digits} operator="-" lowNumbers={levelParams.lowNumbers} keyName="practiceSubtraction"/>
                {/* <Operation numRows={2} digits={1} operator="+" lowNumbers={false} keyName="practiceAddition"/> */}
            </div>
            <Score keyName="practiceSubtraction"/>
            <Image className="absolute right-0 top-2/4" src={`/einst4.png`} alt="logo" width={120} height={188} />

        </div>
    )
}
export default SubstractionPage