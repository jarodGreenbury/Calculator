import './Home.css';

const Number = (props) => {
    
    const number = props.number;
    var total = props.total;
    total += number;
    
    return ( 
        <div>
            <button className='button'>{number}</button>
            {total}
        </div>
        
     );
}
 
export default Number;