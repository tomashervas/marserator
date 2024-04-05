"use client"
import { useRouter } from "next/navigation"


const DeletePage = () => {

    const router = useRouter()

    const deleteCookiesWithPrefix = (prefix: string) => {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(prefix) === 0) {
                var cookieName = cookie.split("=")[0];
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }
    }

    const handleDelete = () => {
        if (confirm('¿Estas seguro de que deseas borrar todos los datos?')) {
            localStorage.clear()
            deleteCookiesWithPrefix("practice")
            router.push("/")
        }
    }

  return (
    <div className="flex justify-center">
        <button onClick={handleDelete} className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold" >Borrar datos</button>
    </div>
  )
}
export default DeletePage