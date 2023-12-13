import Image from "next/image"

const Building = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
        <Image className=" border rounded-lg border-slate-600 shadow-xl" src="/construccion.jpeg" alt="construccion" width={300} height={300} />
        <h3 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 bg-opacity-70 rounded-lg p-2 border border-slate-400">En construcción, vuelve pronto</h3>
    </div>
  )
}
export default Building