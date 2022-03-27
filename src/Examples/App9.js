import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { PersonBadge } from "react-bootstrap-icons";
import StarRating from "./StarRating";

function App() {
    const [contact, setContact] = useState({
        firstName: "María",
        lastName: "Fernández",
        phone: "+506 123 456 78",
        email: "mariafdz@example.com",
        isFavorite: true
    });

    function toggleFavorite() {
        //console.log("Toggle Favorite");
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return(
        <Container>
            <Card>
                <PersonBadge size={200}/>
                <Card.Body>
                    <StarRating isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <Card.Title>
                        {contact.firstName} {contact.lastName}
                    </Card.Title>
                    <Card.Text>{contact.phone}</Card.Text>
                    <Card.Text>{contact.email}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default App;
