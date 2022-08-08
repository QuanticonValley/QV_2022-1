import Calendar from './cal'

import React, { useState, useEffect } from 'react';
import { prefix } from '../../utils/prefix.js';
import { useMainState} from '../../libs/stateHooks';

import styled from 'styled-components'
import events1 from '../../public/data/calendarEvents'
import events2 from '../../public/data/calendarEvents2'


const Container = styled.div`
  position: relative;
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Event = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7em;
  white-space: pre-wrap;
  border-radius: 1.1em;
  background-color: #1920EF;
  color: white;
  width: 100%;
  height: ${p => p.active ? '100%' : '0'};
  z-index: 3;
  transition: .3s ease;
`
const Close = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  transition: .3s ease;
  :hover{
    cursor: pointer;
    transform: scale(1.2);
  }
`
const Title = styled.h2`
  margin: 0;
`
const DateT = styled.h3`
  margin: 0;
`

const Cal = () => {
   const [mState, setMainState] = useMainState();
   const [isInfo, setIsInfo] = useState(false);
   const [value, setValue] = useState(null);
   const onChange = (nextValue) => {
      setValue(nextValue)
   }

   const erase = () => { setValue(null) }

   let events = events1;
   if (mState.group == "cuatro") { events = events2; }

   let selected = events.find(e => {
      const date = new Date(e.y, e.m - 1, e.d)
      if(e.info != undefined) {
         setIsInfo(true)
         return (date.getTime() === value?.getTime())
      }
      let isInfo= false;
      return (date.getTime() === value?.getTime())
      
   });

   useEffect(() => {
      console.log(isInfo)
      }
   ), [value]




   return (
      <Container>
         <Event active={selected}>
            {selected
               ? <>
                  <DateT>
                     {selected.d}-
                     {selected.m}-
                     {selected.y}
                  </DateT>
                  <Title>{selected.event}</Title>
                  <Title>{selected.info}</Title>
                  <Title>{selected.expires}</Title>
                  <Close onClick={erase} src={`${prefix}/imgs/exit.png`} />
               </>
               : null
            }
         </Event>
         <Calendar
            handleDay={onChange}
            events={events}
         />
      </Container>
   );
}

export default Cal
