import React, { useRef, useState } from "react";
import styled from 'styled-components'
import { prefix } from '../../utils/prefix.js';


class Card extends React.Component {

   constructor(props) {
      super(props);
      this.isRead = new Set();
      this.state = {
         step: 0,
         message: 'Selecciona y lee cada uno de los roles,\nten presente la información.'
      }

      this.readyButton = React.createRef();
      this.endButton = React.createRef();

      this.ceoCard = React.createRef();
      this.ceoCardInner = React.createRef();
      this.ceoCardImage = React.createRef();
      this.ceoArrow1 = React.createRef();
      this.ceoArrow2 = React.createRef();

      this.ccoCard = React.createRef();
      this.ccoCardInner = React.createRef();
      this.ccoCardImage = React.createRef();
      this.ccoArrow1 = React.createRef();
      this.ccoArrow2 = React.createRef();

      this.cmoCard = React.createRef();
      this.cmoCardInner = React.createRef();
      this.cmoCardImage = React.createRef();
      this.cmoArrow1 = React.createRef();
      this.cmoArrow2 = React.createRef();

      this.cooCard = React.createRef();
      this.cooCardInner = React.createRef();
      this.cooCardImage = React.createRef();
      this.cooArrow1 = React.createRef();
      this.cooArrow2 = React.createRef();

      this.ctoCard = React.createRef();
      this.ctoCardInner = React.createRef();
      this.ctoCardImage = React.createRef();
      this.ctoArrow1 = React.createRef();
      this.ctoArrow2 = React.createRef();

      this.cfoCard = React.createRef();
      this.cfoCardInner = React.createRef();
      this.cfoCardImage = React.createRef();
      this.cfoArrow1 = React.createRef();
      this.cfoArrow2 = React.createRef();

      this.readyOne = this.readyOne.bind(this);
      this.readyTwo = this.readyTwo.bind(this);

      this.ceoFlip = this.ceoFlip.bind(this);
      this.ccoFlip = this.ccoFlip.bind(this);
      this.cmoFlip = this.cmoFlip.bind(this);
      this.cooFlip = this.cooFlip.bind(this);
      this.ctoFlip = this.ctoFlip.bind(this);
      this.cfoFlip = this.cfoFlip.bind(this);

      this.ceoReset = this.ceoReset.bind(this);
      this.ccoReset = this.ccoReset.bind(this);
      this.cmoReset = this.cmoReset.bind(this);
      this.cooReset = this.cooReset.bind(this);
      this.ctoReset = this.ctoReset.bind(this);
      this.cfoReset = this.cfoReset.bind(this);

      this.ceoUp = this.ceoUp.bind(this);
      this.ceoDown = this.ceoDown.bind(this);
      this.ccoUp = this.ccoUp.bind(this);
      this.ccoDown = this.ccoDown.bind(this);
      this.cmoUp = this.cmoUp.bind(this);
      this.cmoDown = this.cmoDown.bind(this);
      this.cooUp = this.cooUp.bind(this);
      this.cooDown = this.cooDown.bind(this);
      this.cooUp = this.cooUp.bind(this);
      this.cooDown = this.cooDown.bind(this);
      this.ctoUp = this.ctoUp.bind(this);
      this.ctoDown = this.ctoDown.bind(this);
      this.cfoUp = this.cfoUp.bind(this);
      this.cfoDown = this.cfoDown.bind(this);
   }

   ceoFlip() {
      this.ceoCardInner.current.style.zIndex = 2;
      this.ccoCardInner.current.style.zIndex = 1;
      this.cmoCardInner.current.style.zIndex = 1;
      this.cooCardInner.current.style.zIndex = 1;
      this.ctoCardInner.current.style.zIndex = 1;
      this.cfoCardInner.current.style.zIndex = 1;

      this.ceoCardInner.current.style.top = '-28vh';
      this.ceoCardInner.current.style.left = '45%';
      this.ceoCardInner.current.style.transform = 'rotateY(180deg)';
   }

   ccoFlip() {
      this.ceoCardInner.current.style.zIndex = 1;
      this.ccoCardInner.current.style.zIndex = 2;
      this.cmoCardInner.current.style.zIndex = 1;
      this.cooCardInner.current.style.zIndex = 1;
      this.ctoCardInner.current.style.zIndex = 1;
      this.cfoCardInner.current.style.zIndex = 1;

      this.ccoCardInner.current.style.top = '-28vh';
      this.ccoCardInner.current.style.left = '28%';
      this.ccoCardInner.current.style.transform = 'rotateY(180deg)';
   }

   cmoFlip() {
      this.ceoCardInner.current.style.zIndex = 1;
      this.ccoCardInner.current.style.zIndex = 1;
      this.cmoCardInner.current.style.zIndex = 2;
      this.cooCardInner.current.style.zIndex = 1;
      this.ctoCardInner.current.style.zIndex = 1;
      this.cfoCardInner.current.style.zIndex = 1;

      this.cmoCardInner.current.style.top = '-28vh';
      this.cmoCardInner.current.style.left = '11%';
      this.cmoCardInner.current.style.transform = 'rotateY(180deg)';
   }

   cooFlip() {
      this.ceoCardInner.current.style.zIndex = 1;
      this.ccoCardInner.current.style.zIndex = 1;
      this.cmoCardInner.current.style.zIndex = 1;
      this.cooCardInner.current.style.zIndex = 2;
      this.ctoCardInner.current.style.zIndex = 1;
      this.cfoCardInner.current.style.zIndex = 1;

      this.cooCardInner.current.style.top = '-28vh';
      this.cooCardInner.current.style.left = '-6%';
      this.cooCardInner.current.style.transform = 'rotateY(180deg)';
   }

   ctoFlip() {
      this.ceoCardInner.current.style.zIndex = 1;
      this.ccoCardInner.current.style.zIndex = 1;
      this.cmoCardInner.current.style.zIndex = 1;
      this.cooCardInner.current.style.zIndex = 1;
      this.ctoCardInner.current.style.zIndex = 2;
      this.cfoCardInner.current.style.zIndex = 1;

      this.ctoCardInner.current.style.top = '-28vh';
      this.ctoCardInner.current.style.left = '-23%';
      this.ctoCardInner.current.style.transform = 'rotateY(180deg)';
   }

   cfoFlip() {
      this.ceoCardInner.current.style.zIndex = 1;
      this.ccoCardInner.current.style.zIndex = 1;
      this.cmoCardInner.current.style.zIndex = 1;
      this.cooCardInner.current.style.zIndex = 1;
      this.ctoCardInner.current.style.zIndex = 1;
      this.cfoCardInner.current.style.zIndex = 2;

      this.cfoCardInner.current.style.top = '-28vh';
      this.cfoCardInner.current.style.left = '-40%';
      this.cfoCardInner.current.style.transform = 'rotateY(180deg)';
   }

   ceoReset() {
      this.isRead.add('ceo');
      if (this.isRead.size == 6) { this.info() }

      this.ceoCardImage.current.style.width = '15%';
      this.ceoCard.current.style.left = `-89%`;
      this.ceoCard.current.style.top = '80.5%';
   }

   ccoReset() {
      this.isRead.add('cco');
      if (this.isRead.size == 6) { this.info() }

      this.ccoCardImage.current.style.width = '15%';
      this.ccoCard.current.style.left = `-55%`;
      this.ccoCard.current.style.top = '80.5%';
   }

   cmoReset() {
      this.isRead.add('cmo');
      if (this.isRead.size == 6) { this.info() }

      this.cmoCardImage.current.style.width = '15%';
      this.cmoCard.current.style.left = `-21%`;
      this.cmoCard.current.style.top = '80.5%';
   }

   cooReset() {
      this.isRead.add('coo');
      if (this.isRead.size == 6) { this.info() }

      this.cooCardImage.current.style.width = '15%';
      this.cooCard.current.style.left = '13%';
      this.cooCard.current.style.top = '80.5%';
   }

   ctoReset() {
      this.isRead.add('cto');
      if (this.isRead.size == 6) { this.info() }

      this.ctoCardImage.current.style.width = '15%';
      this.ctoCard.current.style.left = '47%';
      this.ctoCard.current.style.top = '80.5%';
   }

   cfoReset() {
      this.isRead.add('cfo');
      if (this.isRead.size == 6) { this.info() }

      this.cfoCardImage.current.style.width = '15%';
      this.cfoCard.current.style.left = '81%';
      this.cfoCard.current.style.top = '80.5%';
   }

   ceoUp() {
      if(this.state.step == 1) this.ceoCard.current.style.top = '75%';
      else if(this.state.step == 2) this.ceoCard.current.style.top = '65%';
   }

   ceoDown() {
      if(this.state.step == 1) this.ceoCard.current.style.top = '88%';
      else if(this.state.step == 2) this.ceoCard.current.style.top = '98%';
   }

   ccoUp() {
      if(this.state.step == 1) this.ccoCard.current.style.top = '75%';
      else if(this.state.step == 2) this.ccoCard.current.style.top = '65%';
   }

   ccoDown() {
      if(this.state.step == 1) this.ccoCard.current.style.top = '88%';
      else if(this.state.step == 2) this.ccoCard.current.style.top = '98%';
   }

   cmoUp() {
      if(this.state.step == 1) this.cmoCard.current.style.top = '75%';
      else if(this.state.step == 2) this.cmoCard.current.style.top = '65%';
   }

   cmoDown() {
      if(this.state.step == 1) this.cmoCard.current.style.top = '88%';
      else if(this.state.step == 2) this.cmoCard.current.style.top = '98%';
   }

   cooUp() {
      if(this.state.step == 1) this.cooCard.current.style.top = '75%';
      else if(this.state.step == 2) this.cooCard.current.style.top = '65%';
   }

   cooDown() {
      if(this.state.step == 1) this.cooCard.current.style.top = '88%';
      else if(this.state.step == 2) this.cooCard.current.style.top = '98%';
   }

   ctoUp() {
      if(this.state.step == 1) this.ctoCard.current.style.top = '75%';
      else if(this.state.step == 2) this.ctoCard.current.style.top = '65%';
   }

   ctoDown() {
      if(this.state.step == 1) this.ctoCard.current.style.top = '88%';
      else if(this.state.step == 2) this.ctoCard.current.style.top = '98%';
   }

   cfoUp() {
      if(this.state.step == 1) this.cfoCard.current.style.top = '75%';
      else if(this.state.step == 2) this.cfoCard.current.style.top = '65%';
   }

   cfoDown() {
      if(this.state.step == 1) this.cfoCard.current.style.top = '88%';
      else if(this.state.step == 2) this.cfoCard.current.style.top = '98%';
   }

   info() {
      if (this.state.step == 0) {
         this.setState({
            step: 1,
            message: "Sube los roles que te gustaria hacer en un proyecto,\no baja los roles que no te gustarian realizar."
         });

         this.readyButton.current.style.visibility = "visible";
      }

      this.ceoArrow1.current.style.visibility = "visible";
      this.ceoArrow2.current.style.visibility = "visible";
      this.ccoArrow1.current.style.visibility = "visible";
      this.ccoArrow2.current.style.visibility = "visible";
      this.cmoArrow1.current.style.visibility = "visible";
      this.cmoArrow2.current.style.visibility = "visible";
      this.cooArrow1.current.style.visibility = "visible";
      this.cooArrow2.current.style.visibility = "visible";
      this.ctoArrow1.current.style.visibility = "visible";
      this.ctoArrow2.current.style.visibility = "visible";
      this.cfoArrow1.current.style.visibility = "visible";
      this.cfoArrow2.current.style.visibility = "visible";
   }

   readyOne() {
      if (this.state.step == 1) {
         this.setState({
            step: 2,
            message: "Ahora sube los roles que te gustan cuales te interesan proyecto,\ny baja los roles de los que no te gustan no te interesa realizar."
         });
         this.readyButton.current.style.visibility = "hidden";
         this.endButton.current.style.visibility = 'visible';
      }
   }

   readyTwo() {
      if(this.state.step == 2) {
         
      }
   }

   render() {

      return (
         <div style={{ position: 'relative', width: '100%', height: '100%', alignContent: '' }}>
            <div ref={this.text} style={{
               position: 'relative', width: '100%', top: '10%', alignItems: 'inherit',
               justifyContent: 'center', textAlign: 'center', fontSize: '16px', whiteSpace: 'pre-wrap'
            }}>
               {this.state.message}
               <br /><button ref={this.readyButton} onClick={this.readyOne} style={{ visibility: 'hidden' }}>Listo</button>
               <br /><button ref={this.endButton} onClick={this.readyTwo} style={{ visibility: 'hidden' }}>Finalizar</button>
            </div>

            <div ref={this.ceoCard} className="ceoCard" onClick={this.ceoFlip}>
               <div ref={this.ceoCardInner} className="card-inner">
                  <div className="card-front">
                     <img src={`${prefix}/imgs/cards/ceo-card-front.png`} style={{ width: '15%' }} />
                  </div>
                  <div className="card-back">
                     <img ref={this.ceoArrow1} onClick={this.ceoUp} src={`${prefix}/imgs/cards/ceo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%' }} /><br />
                     <img ref={this.ceoCardImage} onClick={this.ceoReset} src={`${prefix}/imgs/cards/ceo-card-back-1.png`} style={{ width: '45%' }} /><br />
                     <img ref={this.ceoArrow2} onClick={this.ceoDown} src={`${prefix}/imgs/cards/ceo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%', transform: 'rotate(180deg)' }} />
                  </div>
               </div>
            </div>

            <div ref={this.ccoCard} className="ccoCard" onClick={this.ccoFlip}>
               <div ref={this.ccoCardInner} className="card-inner">
                  <div className="card-front">
                     <img src={`${prefix}/imgs/cards/cco-card-front.png`} style={{ width: '15%' }} />
                  </div>
                  <div className="card-back">
                     <img ref={this.ccoArrow1} onClick={this.ccoUp} src={`${prefix}/imgs/cards/cco-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%' }} /><br />
                     <img ref={this.ccoCardImage} onClick={this.ccoReset} src={`${prefix}/imgs/cards/cco-card-back-1.png`} style={{ width: '45%' }} /><br />
                     <img ref={this.ccoArrow2} onClick={this.ccoDown} src={`${prefix}/imgs/cards/cco-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%', transform: 'rotate(180deg)' }} />
                  </div>
               </div>
            </div>

            <div ref={this.cmoCard} className="cmoCard" onClick={this.cmoFlip}>
               <div ref={this.cmoCardInner} className="card-inner">
                  <div className="card-front">
                     <img src={`${prefix}/imgs/cards/cmo-card-front.png`} style={{ width: '15%' }} />
                  </div>
                  <div className="card-back">
                     <img ref={this.cmoArrow1} onClick={this.cmoUp} src={`${prefix}/imgs/cards/cmo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%' }} /><br />
                     <img ref={this.cmoCardImage} onClick={this.cmoReset} src={`${prefix}/imgs/cards/cmo-card-back-1.png`} style={{ width: '45%' }} /><br />
                     <img ref={this.cmoArrow2} onClick={this.cmoDown} src={`${prefix}/imgs/cards/cmo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '.%', top: '0%', width: '3%', transform: 'rotate(180deg)' }} />
                  </div>
               </div>
            </div>

            <div ref={this.cooCard} className="cooCard" onClick={this.cooFlip}>
               <div ref={this.cooCardInner} className="card-inner">
                  <div className="card-front">
                     <img src={`${prefix}/imgs/cards/coo-card-front.png`} style={{ width: '15%' }} />
                  </div>
                  <div className="card-back">
                     <img ref={this.cooArrow1} onClick={this.cooUp} src={`${prefix}/imgs/cards/coo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%' }} /><br />
                     <img ref={this.cooCardImage} onClick={this.cooReset} src={`${prefix}/imgs/cards/coo-card-back-1.png`} style={{ width: '45%' }} /><br />
                     <img ref={this.cooArrow2} onClick={this.cooDown} src={`${prefix}/imgs/cards/coo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%', transform: 'rotate(180deg)' }} />
                  </div>
               </div>
            </div>

            <div ref={this.ctoCard} className="ctoCard" onClick={this.ctoFlip}>
               <div ref={this.ctoCardInner} className="card-inner">
                  <div className="card-front">
                     <img src={`${prefix}/imgs/cards/cto-card-front.png`} style={{ width: '15%' }} />
                  </div>
                  <div className="card-back">
                     <img ref={this.ctoArrow1} onClick={this.ctoUp} src={`${prefix}/imgs/cards/cto-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '8%', width: '3%' }} /><br />
                     <img ref={this.ctoCardImage} onClick={this.ctoReset} src={`${prefix}/imgs/cards/cto-card-back-1.png`} style={{ width: '45%' }} /><br />
                     <img ref={this.ctoArrow2} onClick={this.ctoDown} src={`${prefix}/imgs/cards/cto-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%', transform: 'rotate(180deg)' }} />
                  </div>
               </div>
            </div>

            <div ref={this.cfoCard} className="cfoCard" onClick={this.cfoFlip}>
               <div ref={this.cfoCardInner} className="card-inner">
                  <div className="card-front">
                     <img src={`${prefix}/imgs/cards/cfo-card-front.png`} style={{ width: '15%' }} />
                  </div>
                  <div className="card-back">
                     <img ref={this.cfoArrow1} onClick={this.cfoUp} src={`${prefix}/imgs/cards/cfo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%' }} /><br />
                     <img ref={this.cfoCardImage} onClick={this.cfoReset} src={`${prefix}/imgs/cards/cfo-card-back-1.png`} style={{ width: '45%' }} /><br />
                     <img ref={this.cfoArrow2} onClick={this.cfoDown} src={`${prefix}/imgs/cards/cfo-arrow.png`} style={{ visibility: 'hidden', position: 'static', left: '0%', top: '0%', width: '3%', transform: 'rotate(180deg)' }} />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const Cards = () => {
   const [isRead, setIsread] = useState(false);

   return (
      <Card></Card>
   )
}

export default Cards;