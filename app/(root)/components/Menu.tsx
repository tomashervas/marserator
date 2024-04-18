import { IoCloseOutline } from "react-icons/io5"
import IconButton from "./IconButton"
import { useEffect } from "react"
import { useStore } from "@/hooks/useStore"
import { usePathname, useRouter } from "next/navigation"
import { Practice } from "@/hooks/useStore"


interface MenuProps {
    closeMenu: () => void
}

const colors = ['#f87171', '#fdba74', '#fde047', '#bef264', '#86efac', '#2dd4bf', '#67e8f9', '#a5b4fc', '#f9a8d4']

const Menu = ({ closeMenu }: MenuProps) => {

    const pathname = usePathname()

    const { themeColor, setThemeColor, practiceLevel, practiceTempLevel, setPracticeTempLevel, keyName, resetPractice, setToNextLevel } = useStore((state) => state);
    const router = useRouter()

    
    const selectOperation = (operation: string) => {
        if (operation === '/practice/addition') {
            return 'practiceAddition'
        } else if (operation === '/practice/substraction') {
            return 'practiceSubtraction'
        } else if (operation === '/practice/multiply') {
            return 'practiceMultiply'
        }
        else  return 'practiceAddition'
    }
    const level = practiceLevel[selectOperation(pathname)] 

    const levelArray = Array.from({ length: level }, (_, i) => i + 1);

    const handleColorChange = (e: any) => {
        const selectedColor = e.target.value;
        document.body.style.setProperty('background', selectedColor);
        setThemeColor(selectedColor);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 90);
        document.cookie = `theme-color=${selectedColor}; path=/; expires=${expirationDate.toUTCString()}`
        router.refresh()
        closeMenu();
    };


    function onChangeTempLevel(event: React.MouseEvent<HTMLButtonElement>): void {
        const selectedLevel = Number(event.currentTarget.textContent);
        console.log(event.currentTarget.textContent)
        setPracticeTempLevel(selectOperation(pathname), selectedLevel)
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 90);
        document.cookie = `practiceTempLevel${keyName}=${selectedLevel}; path=/; expires=${expirationDate.toUTCString()}`
        setToNextLevel(selectedLevel + 10)
        resetPractice()
        router.refresh()
        closeMenu()

    }

    return (
        <div className="absolute -top-2 -right-2 w-screen h-screen z-10 p-6" style={{ background: themeColor }}>
            <IconButton className="absolute top-4 right-4" onClick={closeMenu}>
                <IoCloseOutline size={30} />
            </IconButton>
            {level > 1 &&
                <div className="my-8">
                    <p className="text-md mb-4">Cambiar nivel:</p>
                    <ul className="flex space-x-4 flex-wrap">

                        {
                            levelArray.map((level) => (
                                <li key={level}><button className={`w-10 h-10 mb-4 border border-zinc-800 rounded-md shadow-md ${level === practiceTempLevel[selectOperation(pathname)] ? 'bg-slate-600/50' : ''}`} type="button" onClick={onChangeTempLevel}>{level}</button></li>
                            ))
                        }
                    </ul>
                </div>

            }
            <p className="text-md mt-8 my-4">Color de fondo:</p>
            <div>
                <ul className="flex space-x-4 flex-wrap">
                    {colors.map((color) => (
                        <button className="w-10 h-10 mb-4 border border-zinc-800 rounded-md shadow-md" key={color} value={color} onClick={handleColorChange} style={{ backgroundColor: color }} type="button"></button>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Menu