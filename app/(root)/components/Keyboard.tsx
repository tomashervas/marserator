import { selectColor } from "@/utils/operations"

interface KeyboardProps {
    // setDigit: React.Dispatch<React.SetStateAction<string>>
    setBoxes: React.Dispatch<React.SetStateAction<string[]>>
    setVisibleKey: React.Dispatch<React.SetStateAction<boolean>>
    index: number
}

const Keyboard = ({ setVisibleKey, setBoxes, index }: KeyboardProps) => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <div className="flex justify-end flex-wrap w-40">
            {numbers.map((num) => (
                <div key={num} onClick={() => {
                    setBoxes((prev: string[]) => {
                        const newArray: string[] = [...prev]
                        newArray[index] = num.toString()
                        return newArray
                    })
                    setVisibleKey(false)
                }} className={`m-1 p-2 text-xl text-center min-w-[44px] bg-black bg-opacity-5 rounded-md`}>
                    {num}
                </div>
            ))}
            <div onClick={() => setVisibleKey(false)} className={`m-1 p-2 text-xl text-center min-w-[96px] bg-black bg-opacity-5 rounded-md`}>Cerrar</div>
        </div>
    )
}
export default Keyboard