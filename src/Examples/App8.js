import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Star, StarFill, PersonBadge } from "react-bootstrap-icons";

function App() {
    const [contact, setContact] = useState({
        firstName: "María",
        lastName: "Fernández",
        phone: "+506 123 456 78",
        email: "mariafdz@example.com",
        isFavorite: false
    });

    let starIcon = contact.isFavorite ? <StarFill /> : <Star />;

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
                    <div onClick={toggleFavorite}>{starIcon}</div>
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
