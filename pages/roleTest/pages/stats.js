import AliceCarousel from 'react-alice-carousel';
import { prefix } from '../../../utils/prefix';
import { useMainState } from '../../../libs/stateHooks'

const handleDragStart = (e) => e.preventDefault();

const Stats = () => {
   const [mState, setMainState] = useMainState()

   if (mState.group == "dos") {
      return (
         <div>
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Emprendimiento, Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Emprendimiento, Tabla, Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Emprendimiento, NO Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Emprendimiento, Tabla, NO Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
         </div>
      );
   }

   else {
      return (
         <div>
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Innovación Abierta, Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Innovación Abierta, Tabla, Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Innovación Abierta, NO intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
            <br /><img width="90%" src={`${prefix}/imgs/cards/stats/Roles de Trabajo, Innovación Abierta, Tabla, NO Intereses.png`} onDragStart={handleDragStart} className="sliderimg" />
         </div>
      );
   }
}

export default Stats;
