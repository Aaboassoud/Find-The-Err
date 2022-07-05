import React, { useState ,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Nav,Navbar,NavDropdown,Carousel,Col,Row,ListGroup,Badge, Card} from 'react-bootstrap';

//useEffect

function About() {
    const [message, setMessage] = useState('Hi there, my name is Adnan');
    const [img, setImg] = useState()
    useEffect(() => {
      console.log('useEffect');
      setTimeout(() => {
        setMessage(`Welcome to my Website`);
        setImg(<img src='https://i.pinimg.com/originals/23/69/25/23692534ff63398f63f76159f4ebe665.jpg' />)
      }, 3000)
    })
    
  return (
    <div>
       <Badge className='bg-warning m-5 text-dark' style={{fontSize: 75}}>
        {message}
      </Badge>{' '}
      <Card className='bg-dark'>
      {img}
      </Card>
    </div>
  );
}

export default About;