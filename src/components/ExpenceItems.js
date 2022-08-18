import  '../stylefills/ExpenceItems.css';
import ExpenceDate from './ExpenceDte';

function ExpenceItem({title, price, dt,dn,dy}) {
    
    return( 
        <div className='parenatexpentdiv'>
            <ExpenceDate dt={dt} dn={dn} dy={dy} />
            
            <div className='n2ddiv'>
                {/* <div className='titlediv'> */}
                    <h1 className='titlediv'>{title}</h1>
                {/* </div> */}

                <div className='pricediv'>
                    <h2>{price}tk</h2>
                </div>
            </div>
        </div>
    );
}

export default ExpenceItem;