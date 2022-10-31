import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { prefix } from '../../utils/prefix.js';
import { useMainState } from '../../libs/stateHooks'

const handleDragStart = (e) => e.preventDefault();

const Gallery = () => {
   const [mState, setMainState] = useMainState()

   if (mState.group == "dos") {
      return (
         <AliceCarousel autoPlay disableButtonsControls autoPlayInterval="6000" >
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/01.png`} onDragStart={handleDragStart} className="sliderimg" />
            <a href="https://youtu.be/wri7qUF8_TE" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/02.png`} onDragStart={handleDragStart} className="sliderimg" />
            </a>

            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/03.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/04.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/05.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/06.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/07.png`} onDragStart={handleDragStart} className="sliderimg" />

            {/* <a href="" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/_06.png`} onDragStart={handleDragStart} className="sliderimg" />
            </a> */}
         </AliceCarousel>
      );
   }

   else {
      return (
         <AliceCarousel autoPlay disableButtonsControls autoPlayInterval="6000">
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/01.png`} onDragStart={handleDragStart} className="sliderimg" />
            <a href="https://youtu.be/wri7qUF8_TE" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/innovacion/02.png`} onDragStart={handleDragStart} className="sliderimg" />
            </a>

            <img width="90%" src={`${prefix}/imgs/banner/innovacion/03.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/04.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/05.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/06.png`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/innovacion/07.png`} onDragStart={handleDragStart} className="sliderimg" />
         </AliceCarousel>
      );
   }
}

export default Gallery;