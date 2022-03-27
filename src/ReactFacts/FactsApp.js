import React from "react";
import { Container } from "react-bootstrap";
import Fact from "./Fact";
import reactFacts from "./Data/reactFacts";

function App() {

    const factElements = reactFacts.map(fact => {
        return (
            <Fact
                key={fact.id}
                question={fact.question}
                answer={fact.answer}
            />
        )
    })
    return (
        <Container>
            {factElements}
        </Container>
    )
}

export default App;

