import { useState } from "react"
import "./NewExpences.css"

export default function ExpencesFrom({...props}){
    const [entertitle, setTitle] = useState()
    const [enterDate, setDate] = useState()
    const [enterAmount, setAmount] = useState()

    // const [userInput, setuserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate:''
    // })

    const titelChangeHandeler = (event) => {
        
        setTitle(event.target.value);
    };

    const amountChangeHandeler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandeler = (event) => {
        // console.log(userInput.enterDate);
        // setuserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // });

        setDate(event.target.value);
    } 
       

    const sumitClickHandeler = (event) => {
        event.preventDefault();

            const expencesData = {
                title : entertitle,
                date : new Date(enterDate),
                price : enterAmount,
            };
            props.onsaveExpectdataData(expencesData);
            // console.log(expencesData)

            // console.log(expencesData.titel+"  "+expencesData.date)
           setAmount('');
           setDate('');
           setTitle('');
    }

    return(
        <form onSubmit={sumitClickHandeler}>
            <div className="from">
                <div className="titel">
                    <label >Titel</label> <br/>
                    <input 
                        value={entertitle}
                        onChange={titelChangeHandeler} className="input" type="text"
                    />
                </div>

                <div className="amount">
                    <label >Amount</label> <br/>
                    <input 
                        value={enterAmount}
                        onChange={amountChangeHandeler} 
                        className="input" type="number" nim="0.01" step="0.01"
                    />
                </div>

                <div className="date">
                    <label>Date</label> <br/>
                    <input 
                        value={enterDate}
                        onChange={dateChangeHandeler} 
                        className="input" type="date" nim="2015-01-01" step="2030-12-31"
                    />
                </div>
            </div>

            <div className="NewExpence__action">
                   <button type="submit">Add Expences</button> 
            </div>
        </form>
    )
}