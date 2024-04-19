import { cookies } from "next/headers"
import Score from "../../components/Score"
import { calculateLevelMultiplication } from "@/utils/operations"
import Multiplication from "../../components/Multiplication"
import Image from "next/image"

const MultiplyPage = () => {
  const cookieStore = cookies()
    const level = cookieStore.get('practiceLevelpracticeMultiply')?.value || 1
    const tempLevel = cookieStore.get('practiceTempLevelpracticeMultiply')?.value
    const levelParams = calculateLevelMultiplication(Number(tempLevel ? tempLevel : level))
    console.log('tempLevel: ', tempLevel, 'level: ', level)
    console.log('levelParams: ', levelParams)

    return (
        <div className="flex-1">
            <h1 className="text-xl text-center">Multiplicaciones</h1>
            { tempLevel && level !== tempLevel &&
                <h2 className="p-4 text-center">Tu nivel es {level} pero estás practicando con un nivel {tempLevel} puedes volver a cambiarlo desde el menú</h2>
            }
            <div className="flex flex-col items-center p-8">
                <Multiplication numRows={levelParams.numRows} digits={levelParams.digits} operator="x" base={levelParams.base} keyName="practiceMultiply"/>
                {/* <Operation numRows={2} digits={1} operator="+" lowNumbers={false} keyName="practiceAddition"/> */}
            </div>
            <Score keyName="practiceMultiply"/>
            <Image className="absolute right-0 top-2/4" src={`/einst4.png`} alt="logo" width={120} height={188} />
        </div>
    )
}
export default MultiplyPage