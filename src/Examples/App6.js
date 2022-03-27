import React, {useState} from "react"
import "./App6.css";

 function App() {

    const [count, setCount] = useState(0);
    function addOne() {
        setCount(prevCount => prevCount +1);
    }
    function subsOne() {
        setCount(prevCount => prevCount -1);
    }
    return (
        <div className="counter">
            <button className="counterMinus" onClick={subsOne}>-</button>
            <div className="counterCount">
                <h1>{count}</h1>
            </div>
            <button className="counterPlus" onClick={addOne}>+</button>
        </div>
    )
}

export default App;

