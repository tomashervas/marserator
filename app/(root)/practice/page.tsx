import Image from "next/image";
import Link from "next/link";

const PraticePage = () => {

  return (


      <div className="flex flex-col justify-center items-center ">
        <Image className="mx-auto" src={`/einst2.png`} alt="logo" width={160} height={250} />
        <ul className="flex flex-col items-center space-y-4 w-full">
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/addition"}>Sumas</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/substraction"}>Restas</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/multiply"}>Multiplicaciones</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/both"}>Combinadas</Link></li>
        </ul>
      </div>

  )
}
export default PraticePage