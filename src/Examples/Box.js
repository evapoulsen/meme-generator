import React, { useState } from "react";

function Box(props) {
    const [on, setOn] = useState(props.on);
    const value = on ? "off" : "on";

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    function toggle() {
        setOn(prevOn => !prevOn);
        alert("I am now " + value)
    }
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}

export default Box;

