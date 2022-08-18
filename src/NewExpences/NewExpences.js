import ExpencesFrom from "./ExpencesFrom"
import "./NewExpences.css"

export default function NewExpences({...props}){
    const saveExpectdataHandeler = (enterExpectdata) =>{
        const expencesData = {
            ...enterExpectdata,
            id : Math.random().toString()
        }
        // console.log(expencesData)
        props.onAddExpemce(expencesData);
    }

    return(
        <div className="newexpencesfrom">
            <ExpencesFrom onsaveExpectdataData={saveExpectdataHandeler} />
        </div>
    )
}