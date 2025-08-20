import React, { use, useEffect, useState } from 'react'
import "./Slideshow.css"
const images = [
    "/sweet-crum-bakers/images/banner.jpg",
    "/sweet-crum-bakers/images/cake.jpg",
    "/sweet-crum-bakers/images/bread.jpg",
];

const Slideshow = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change image every 2 sec

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className='Container'>
       <img src={images[currentIndex]} alt={`slide ${currentIndex}`} className='Slide-Image'/>
    </div>
  )
}

export default Slideshow
