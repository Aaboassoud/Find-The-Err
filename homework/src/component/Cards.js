import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import CardData from "./CardData";


function Cards() {
  const [memeImage, setMemeImage] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };
  return (
    <div className="text-center container w-50">
      <CardGroup className="m-5">
      <Card>
        <Card.Img variant="top" src={memeImage} />
      </Card>
      </CardGroup>
      <Button variant="outline-danger m-1" onClick={myRandomEmg}>Get a new image</Button>{' '}
    </div>
  );
}

export default Cards;
