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
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/01.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/02.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/03.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/04.jpg`} onDragStart={handleDragStart} className="sliderimg" />

            <a href="https://www.eltiempo.com/tecnosfera/novedades-tecnologia/diggi-pymes-asi-es-el-erp-de-impacto-social-703700" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/05.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            </a>
            <a href="https://twitter.com/UNALOficial/status/1572619231685971968?t=m-K1B3_jz4nfJvH7YGjYNQ&s=08" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/06.png`} onDragStart={handleDragStart} className="sliderimg" />
            </a>
         </AliceCarousel>
      );
   }

   else {
      return (
         <AliceCarousel autoPlay disableButtonsControls autoPlayInterval="6000">
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/01.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/02.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/03.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/04.jpg`} onDragStart={handleDragStart} className="sliderimg" />

            <a href="https://www.eltiempo.com/tecnosfera/novedades-tecnologia/diggi-pymes-asi-es-el-erp-de-impacto-social-703700" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/05.jpg`} onDragStart={handleDragStart} className="sliderimg" />
            </a>
            <a href="https://twitter.com/UNALOficial/status/1572619231685971968?t=m-K1B3_jz4nfJvH7YGjYNQ&s=08" rel="noreferrer" target="_blank">
               <img width="90%" src={`${prefix}/imgs/banner/emprendimiento/06.png`} onDragStart={handleDragStart} className="sliderimg" />
            </a>
         </AliceCarousel>
      );
   }
}

export default Gallery;