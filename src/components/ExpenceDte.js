import  '../stylefills/ExpenceItems.css';
// import  '../stylefills/ExpencesDate.css';

function ExpenceDate({dt,dn,dy}) {
    let moth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // const d = new Date(2021, 5, 21);
    const m = moth[dn];
    
    return( 
        <div className='datediv'>
        <div>{m}</div>
        <div>{dy}</div>
        <div className='dates'>{dt}</div>
        </div>
    );
}

export default ExpenceDate;