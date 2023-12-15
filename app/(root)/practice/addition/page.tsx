import Operation from "../../components/Operation"
import Score from "../../components/Score"

const AdditionPage = () => {

    return (
        <div className="flex-1">
            <h1 className="text-xl text-center">Sumas</h1>
            <div className="flex flex-col items-center p-8">
                <Operation numRows={2} digits={2} operator="+" />
            </div>
            <Score keyName="practiceAddition"/>
        </div>
    )
}
export default AdditionPage