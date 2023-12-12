import Link from "next/link";
import Addition from "./components/Addition";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center gap-10">
      <h1 className="text-3xl mt-10 font-bold">Marserator</h1>
      <Image src="/logo_marserator.png" alt="logo" width={200} height={200} />
      <div className="flex-1 flex justify-center w-full">
        <ul className="flex flex-col items-center gap-6 w-full">
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link href={"/practice"}>Practica operaciones</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link href={"/challenges"}>Desafíos</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link href={"/problems"}>Problemas</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link href={"/games"}>Juegos</Link></li>
          <li className="text-xl w-3/4 border border-slate-800 py-2 px-4 shadow-md rounded-lg text-center"><Link href={"/statistics"}>Estadísticas</Link></li>
        </ul>
        <Link href={""}></Link>
        
      </div>
    </main>
  )
}
