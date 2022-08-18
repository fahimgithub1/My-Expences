

function ChartBar({...props}) {
    let full_css = '0%';

    if(props.maxvalue > 0){
        full_css = Math.round((props.value/props.maxvalue)*100) + '%';
    }

    return( 
        <div className="line">
            
            <div className="chart_inner" style={{}}>
            <div className="chart_fill" style={{height: full_css}}></div>
            </div>

            <div className="chart_lavel">{props.lavel}</div>
        </div>
    );
}

export default ChartBar;