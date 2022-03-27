import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap"
import { Image } from "react-bootstrap-icons";
import memesData from "../Data/memesData";
import "./Meme.css";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <div>
            <Form className="getImages">
                <Row>
                    <Col className="col-md-6 col-12">
                        <input 
                        type="text" 
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange} 
                        />
                    </Col>
                    <Col className="col-md-6 col-12">
                        <input 
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="submitButton">
                        <Button
                            variant="warning"
                            className="newImage"
                            onClick={getMemeImage}>Get a new image <Image /></Button>
                    </Col>
                </Row>
            </Form>
            <div className="memeDisplay">
                <img src={meme.randomImage} className="memeImage" />
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme;
