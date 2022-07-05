import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function home() {
  return (
    <div>
        <h1 className='text-danger text-center m-5'>Welcome Home page</h1>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/63/41/r6OVl4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/736x/81/5c/33/815c33df5bbb83b23afe57c0d81a0e8a--wallpapers-wallpapers-wallpaper-backgrounds.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://w0.peakpx.com/wallpaper/576/742/HD-wallpaper-republic-of-gamers-game-best.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
