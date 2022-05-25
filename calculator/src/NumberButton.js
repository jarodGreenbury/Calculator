import './Home.css';

const Number = (props) => {
    
    const number = props.number;

    return ( 
        <button>{number}</button>
     );
}
 
export default Number;