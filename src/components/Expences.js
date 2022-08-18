import { useState } from "react";
import ExpenceItem from "../components/ExpenceItems";
import Chart from "../NewExpences/Chart/chart";


function ExpencesDIV({...props}){
  const[get_year, setget_Year] = useState('2022');
  // const[filterYear, setFilterYear] = useState('') 

  const handelYear=(e)=>{
    setget_Year(e.target.value);
    console.log(get_year)
  }

  // const setFilterYear

  const filterYear = props.expencs.filter(expece=> {
    return expece.date.getFullYear().toString() === get_year;
  });

  let showExpences = <p className="noData"> No data Found !!!!!!!</p>;

  if(filterYear.length > 0){
    // if(filterYear.title.length > 0){
      showExpences = filterYear.map(expenc => <ExpenceItem 
        key = {expenc.id}
        dt = {expenc.date.getDate()}
        dn = {expenc.date.getMonth()-1}
        dy = {expenc.date.getFullYear()}
        title = {expenc.title}
        price = {expenc.price}
      />);
    // }
    // else{

    // }
  }

  return (
      <div className="Expences_section">

        <div className="filter_div">
                <h3>Filter by Year</h3>
                {/* <div className="yers_select"> */}
                  <select className="yers_select" name="year" id="year" onChange={handelYear}>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                  </select>
                {/* </div> */}
        </div>
        
        <Chart filterYear = {filterYear} />
        
        {showExpences}
      </div>
  );
}

export default ExpencesDIV;

    //   {/* <ExpenceItem 
    //                dt = {expence[0].date.getDate()}
    //                dn = {expence[0].date.getMonth()+1}
    //                dy = {expence[0].date.getFullYear()}
    //                title = {expence[0].title}
    //                price = {expence[0].price}
    //   ></ExpenceItem> */}