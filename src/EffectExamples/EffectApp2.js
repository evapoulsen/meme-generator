import React, { useEffect, useState } from "react";

function App() {
    const [starWarsData, setStarWarsData] = useState({});
    useEffect(function() {
        console.log("Effect ran");
        fetch("https://swapi.dev/api/people/20")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, []);


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default App;