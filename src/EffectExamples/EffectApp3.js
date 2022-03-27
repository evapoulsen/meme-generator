import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function App() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = React.useState(1);
    useEffect(function() {
        fetch("https://swapi.dev/api/people/" + count)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count]);
    //console.log(starWarsData);

    return (
        <Container>
            <h2>Star Wars Character Number {count}</h2>
            
            <br /> <br />
            <div className="card"  style={{width: "18rem"}}>
                <h3 className="card-title" style={{textAlign: "center"}}>{starWarsData.name}</h3>
                <div className="card-body">
                    <p>
                        Height: {starWarsData.height} cm.<br />
                        Weight: {starWarsData.mass} kg <br />
                        Hair Color: {starWarsData.hair_color} <br />
                        Skin Color: {starWarsData.skin_color} <br />
                        Gender: {starWarsData.gender}
                    </p>
                </div>
                <button className="btn btn-success" onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            </div>
        </Container>
    )
}

export default App;

