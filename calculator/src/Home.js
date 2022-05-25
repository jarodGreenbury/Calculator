import Number from "./NumberButton";
import './Home.css';

const Home = () => {
    return (  
        <div className="grid-container">
            <div className="1">
            <Number number = {1} />
            </div>
            <div className="2">
            <Number number = {2} />
            </div>
            <div className="3">
            <Number number = {3} />
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
            <div className="7">
            <Number number = {7} />
            </div>
            <div className="8">
            <Number number = {8} />
            </div>
            <div className="9">
            <Number number = {9} />
            </div>
            <div className="0">
            <Number number = {0} />
            </div>
        </div>
    );
}
 
export default Home;