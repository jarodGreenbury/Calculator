import Number from "./NumberButton";
import './Home.css';
import Display from "./Display";
import Addition from "./Calculations/Addition";
import Subtraction from "./Calculations/Subtraction";
import Divide from "./Calculations/Divide";
import Multiply from "./Calculations/Multiply";
import Equals from "./Calculations/Equals";
import Decimal from "./Calculations/Decimal";

const Home = () => {
    var total = 0;

    return (  
        <div className="grid-container">
            <div className="displayArea">
                <Display/>
            </div>
            <div className="1">
            <Number number = {1} total = {total} />
            </div>
            <div className="2">
            <Number number = {2} />
            </div>
            <div className="3">
            <Number number = {3} />
            </div>
            <div className="Add">
            <Addition/>
            </div>
            <div className="4">
            <Number number = {4} />
            </div>
            <div className="5">
            <Number number = {5} />
            </div>
            <div className="6">
            <Number number = {6} />
            </div>
            <div className="Sub">
            <Subtraction/>
            </div>
            <div className="7">
            <Number number = {7} />
            </div>
            <div className="8">
            <Number number = {8} />
            </div>
            <div className="9">
            <Number number = {9} />
            </div>
            <div className = "divide">
                <Divide/>
            </div>
            <div className = "decimal">
                <Decimal/>
            </div>
            <div className="0">
            <Number number = {0} />
            </div>
            <div className = "equals">
                <Equals/>
            </div>
            <div className = "multiply">
                <Multiply/>
            </div>
        </div>
    );
}
 
export default Home;