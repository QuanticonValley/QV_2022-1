import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useMainState } from '../../libs/stateHooks'
import { prefix } from '../../utils/prefix.js';
// import image1 from '../../public/imgs/banner/editable.jpg'

const handleDragStart = (e) => e.preventDefault();

const Gallery = () => {
   const [mState, setMainState] = useMainState()

   if (mState.group == "dos") {
      return (
         <AliceCarousel autoPlay disableButtonsControls autoPlayInterval="3000" >
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/01.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/02.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/03.png`} onDragStart={handleDragStart} className="sliderimg" />
         </AliceCarousel>
      );
   }

   else {
      return (
         <AliceCarousel autoPlay disableButtonsControls autoPlayInterval="3000">
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/01.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/02.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/03.png`} onDragStart={handleDragStart} className="sliderimg" />
         </AliceCarousel>
      );
   }
}

export default Gallery;