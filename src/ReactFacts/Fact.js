import React, {useState} from "react";
import { Button } from "react-bootstrap"

function Fact(props) {
    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown(prevIsShown => !prevIsShown);
    }

    return (
        <div>
            {props.question && <h3>{props.question}</h3>}
            {isShown && <p>{props.answer}</p>}
            <Button variant="secondary" onClick={toggleShown}>{isShown ? "Hide" : "Show"} answer</Button>
            <hr />
        </div>
    )
}

export default Fact;

