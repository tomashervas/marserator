import Link from "next/link";

const PraticePage = () => {

  return (
    <div className="flex-1 flex justify-center items-center ">
      <ul className="flex flex-col items-center gap-6 w-full">
        <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/addition"}>Sumas</Link></li>
        <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/substraction"}>Restas</Link></li>
        <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link className="w-2/4" href={"/practice/both"}>Combinadas</Link></li>
      </ul>
    </div>

  )
}
export default PraticePage