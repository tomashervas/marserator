import { IoCloseOutline } from "react-icons/io5"
import IconButton from "./IconButton"
import { useEffect } from "react"
import { useStore } from "@/hooks/useStore"

interface MenuProps {
    closeMenu: () => void
}

const colors = ['#f87171', '#fdba74', '#fde047', '#bef264', '#86efac', '#2dd4bf', '#67e8f9', '#a5b4fc', '#f9a8d4']

const Menu = ({ closeMenu }: MenuProps) => {

    const { themeColor, setThemeColor } = useStore((state) => state);

    const handleColorChange = (e: any) => {
        console.log('hola')
        const selectedColor = e.target.value;
        document.body.style.setProperty('background', selectedColor);
        setThemeColor(selectedColor);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 90);
        document.cookie = `theme-color=${selectedColor}; path=/; expires=${expirationDate.toUTCString()}`
        closeMenu();
    };


    return (
        <div className="absolute -top-2 -right-2 w-screen h-screen z-10 p-6" style={{ background: themeColor }}>
            <IconButton className="absolute top-4 right-4" onClick={closeMenu}>
                <IoCloseOutline size={30} />
            </IconButton>
            <p className="text-md mt-8">Color de fondo:</p>
            <div>
                <ul className="flex gap-2">
                    {colors.map((color) => (
                        <button className="w-8 h-8 border border-zinc-800 rounded-md shadow-md" key={color} value={color} onClick={handleColorChange} style={{ backgroundColor: color }} type="button"></button>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Menu