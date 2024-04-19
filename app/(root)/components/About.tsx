import Image from "next/image"
import { useState } from "react"

const About = () => {
    const [visible, setVisible] =  useState(false)
  return (
    <div className="flex flex-col items-center p-8" >
        <button onClick={() => setVisible(!visible)} className=" px-4 py-2 rounded-full bg-slate-800 text-white font-semibold">Sobre mi</button>
        { visible &&
            <div className="flex flex-col items-center space-y-2 p-8">
                <Image className="rounded-full" src={ '/josetomashervas.png'}  alt="imagen de José Tomás Hervás"  width={100} height={100}/>
                <h1>José Tomás Hervás</h1>
                <p>Desarrollador web fullstack</p>
                <a href="https://josetomashervas.com" className="border border-slate-800 px-4 py-1 rounded-full">josetomashervas.com</a>
            </div>
        }
    </div>
  )
}
export default About