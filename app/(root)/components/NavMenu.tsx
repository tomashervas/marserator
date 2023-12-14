"use client"

import { IoMenuOutline } from "react-icons/io5"
import IconButton from "./IconButton"
import { useEffect, useState } from "react"
import Menu from "./Menu"
import { useStore } from "@/hooks/useStore"

const NavMenu = () => {

    const [show, setShow] = useState(false)

    return (
    <div className="relative">
        <IconButton type='button' onClick={() => setShow(true)}>
            <IoMenuOutline size={30} />
        </IconButton>
        {show && <Menu closeMenu={() => setShow(false)}/>}
    </div>

  )
}
export default NavMenu