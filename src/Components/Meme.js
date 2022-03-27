import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap"
import { Image } from "react-bootstrap-icons";
import "./Meme.css";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        memeName: ""
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        const memeNames = allMemes[randomNumber].name;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            memeName: memeNames
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
                <img src={meme.randomImage} title={meme.memeName} alt={meme.memeName} className="memeImage" />
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme;
