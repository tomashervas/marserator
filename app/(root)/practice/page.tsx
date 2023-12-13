import { ToastContainer } from "react-toastify"
import Operation from "../components/Operation"
import 'react-toastify/dist/ReactToastify.css';


const PraticePage = () => {
  return (
    <div className="flex-1">
        <div className="flex justify-center mt-8">
            <Operation numRows={2} digits={3} operator="+" />
            <ToastContainer autoClose={2500} theme="dark" />

        </div>

    </div>
  )
}
export default PraticePage