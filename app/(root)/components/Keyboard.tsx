interface KeyboardProps {
    setDigit: React.Dispatch<React.SetStateAction<string>>
    setVisibleKey: React.Dispatch<React.SetStateAction<boolean>>
}

const Keyboard = ({ setDigit, setVisibleKey}: KeyboardProps) => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <div className="flex justify-end flex-wrap w-40">
            {numbers.map((num) => (
                <div key={num} onClick={() => {
                    setDigit(num.toString())
                    setVisibleKey(false)
                }} className="m-1 p-2 text-xl text-center min-w-[44px] bg-yellow-500 rounded-md">
                    {num}
                </div>
            ))}
            <div onClick={() => setVisibleKey(false)} className="m-1 p-2 text-xl text-center min-w-[96px] bg-yellow-500 rounded-md">Cerrar</div>
        </div>
    )
}
export default Keyboard