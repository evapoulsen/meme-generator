import React from "react";

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#E28743" : "#1E81B0"
    }
    
    return (
        <div 
        style={styles} 
        className="box"
        onClick={()=>props.handleClick(props.id)}
        >
        </div>
    )
}

export default Box;

