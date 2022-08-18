import { useState } from "react";
import ExpencesDIV from "./components/Expences";
import NewExpences from "./NewExpences/NewExpences";

const ADD_expence = [
  {
    id: 'e1',
    date: new Date(2022,5,26),
    title: 'Home Rent',
    price: '2500',
  },
  
  {
    id: 'e2',
    date: new Date(2021,4,2),
    title: 'Gass bill',
    price: '700',
  },

  {
    id: 'e3',
    date: new Date(2022,7,6),
    title: 'Internet bill',
    price: '850',
  },

  {
    id: 'e4',
    date: new Date(2020,1,12),
    title: 'Water bill',
    price: '1200',
  },
];

function App() {
  
  const [expencs, setExpencs] = useState(ADD_expence)


  const addExpemceHandeler = (expence) =>{
    setExpencs((preExpces)=>{
      return [expence, ...preExpces];
    });
    // console.log(expence)
  }

  return (
    <div className="App">
  
      <NewExpences onAddExpemce={addExpemceHandeler}/>

      <ExpencesDIV expencs={expencs} />
      
    </div>
  );
}

export default App;
