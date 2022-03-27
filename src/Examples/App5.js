import React, { useState } from "react";
import "./App5.css";

function App() {
    const [isImportant, setIsImportant] = useState("Yes");
    console.log(isImportant);
    function handleClick() {
        setIsImportant("No");
    }
    return (
        <div className="state">
            <h1 className="stateTitle">Is state important to know?</h1>
            <div className="stateValue" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

export default App;

