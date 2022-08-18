import ChartBar from './chartBar'
import './cart.css'

function Chart({...props}) {
    const ChartData = [
        {lavel:'Jan', value: 0 },
        {lavel:'Feb', value: 0 },
        {lavel:'Mar', value: 0 },
        {lavel:'Apr', value: 0 },
        {lavel:'May', value: 0 },
        {lavel:'Jun', value: 0 },
        {lavel:'Jul', value: 0 },
        {lavel:'Aug', value: 0 },
        {lavel:'Sep', value: 0 },
        {lavel:'Oct', value: 0 },
        {lavel:'Nov', value: 0 },
        {lavel:'Dec', value: 0 },
    ]

    for (const expece of props.filterYear){
        const expentMounth = expece.date.getMonth();
        ChartData[expentMounth].value +=  expece.price;
    }

    const dataPointValus = ChartData.map(data=>data.value)
    let max_value = Math.max(...dataPointValus);
    
    return( 
        <div className='chart'>
            {ChartData.map(data=>
                <ChartBar 
                value= {data.value}
                maxvalue = {max_value}
                lavel={data.lavel}
                />
            )}
        </div>
    );
}

export default Chart;