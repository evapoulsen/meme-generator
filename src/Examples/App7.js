import React, { useState } from "react";
import "./App5.css";

function App() {
    const [isStudying, setIsStudying] = useState(true);

    function changeMind() {
        setIsStudying(prevState => !prevState);
    }

    return (
        <div className="state">
            <h1 className="stateTitle">Do I feel like studying Swahili tonight?</h1>
            <div onClick={changeMind} className="stateValue">
                <h1>{isStudying ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

export default App;

