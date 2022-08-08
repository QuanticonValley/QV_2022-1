import Calendar from './cal'

import React, { useState } from 'react';
import { prefix } from '../../utils/prefix.js';
import { useMainState } from '../../libs/stateHooks';

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
const EventWithActivity = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${p => p.active ? '90%' : '0'};
`
const EventWithActivity_Activity = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7em;
  white-space: pre-wrap;
  border-radius: 1.1em  1.1em 0 0;
  background-color: #FFC024;
  color: black;
  width: 100%;
  height: ${p => p.active ? '50%' : '0'};
  z-index: 3;
  transition: .3s ease;
`

const EventWithActivity_Event = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7em;
  white-space: pre-wrap;
  border-radius: 0 0 1.1em 1.1em;
  background-color: #1920EF;
  color: white;
  width: 100%;
  height: ${p => p.active ? '50%' : '0'};
  z-index: 3;
  transition: .3s ease;
  bottom: 0;
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



const Activity = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7em;
  white-space: pre-wrap;
  border-radius: 1.1em;
  background-color: #FFC024;
  color: black;
  width: 100%;
  height: ${p => p.active ? '100%' : '0'};
  z-index: 3;
  transition: .3s ease;
`

const Close = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  transition: 0.3s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const Title = styled.h2`
  margin: 0;
`;
const DateT = styled.h3`
  margin: 0;
`;

const Cal = () => {
  const [mState, setMainState] = useMainState();
  const [isInfo, setIsIn] = useMainState();
  const [value, setValue] = useState(null);
  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const erase = () => {
    setValue(null);
  };

  let events = events1;
  if (mState.group == "cuatro") {
    events = events2;
  }

  const ConditionalEvent = ({ children, condition }) => {
    return condition ? <div>{children}</div> : <div> </div>;
  };
  // let selected = events.find(e => {
  //    const date = new Date(e.y, e.m - 1, e.d)
  //    if(e.info != undefined) {

  //    }
  //    return (date.getTime() === value?.getTime())
  // });

  return (
    <Container>
      {events.map((e) => {
        let selectedEvent = undefined;
        const date = new Date(e.y, e.m - 1, e.d);
        let selected = date.getTime() === value?.getTime();
        if (selected) {
          selectedEvent = e;
          return (
            <>
              <ConditionalEvent
                condition={
                  selectedEvent.expires != undefined &&
                  selectedEvent.event != undefined
                }
              >
                <EventWithActivity active={selected}>
                  <EventWithActivity_Activity active={selected}>
                    {selectedEvent ? (
                      <>
                        <DateT>
                          {selectedEvent.d}-{selectedEvent.m}-{selectedEvent.y}
                        </DateT>
                        <Title>{selectedEvent.expires}</Title>
                        <Close
                          onClick={erase}
                          src={`${prefix}/imgs/exit.png`}
                        />
                      </>
                    ) : null}
                  </EventWithActivity_Activity>
                  <EventWithActivity_Event active={selected}>
                    {selectedEvent ? (
                      <>
                        <DateT>
                          {selectedEvent.d}-{selectedEvent.m}-{selectedEvent.y}
                        </DateT>
                        <Title>{selectedEvent.event}</Title>
                      </>
                    ) : null}
                  </EventWithActivity_Event>
                  
                </EventWithActivity>
              </ConditionalEvent>

              <ConditionalEvent
                condition={
                  selectedEvent.expires != undefined &&
                  selectedEvent.event == undefined
                }
              >
                <Activity active={selected}>
                  {selectedEvent ? (
                    <>
                      <DateT>
                        {selectedEvent.d}-{selectedEvent.m}-{selectedEvent.y}
                      </DateT>
                      <Title>{selectedEvent.event}</Title>
                      <Title>{selectedEvent.expires}</Title>
                      <Close onClick={erase} src={`${prefix}/imgs/exit.png`} />
                    </>
                  ) : null}
                </Activity>
              </ConditionalEvent>

              <ConditionalEvent condition={selectedEvent.expires == undefined}>
                <Event active={selected}>
                  {selectedEvent ? (
                    <>
                      <DateT>
                        {selectedEvent.d}-{selectedEvent.m}-{selectedEvent.y}
                      </DateT>
                      <Title>{selectedEvent.event}</Title>
                      <Title>{selectedEvent.expires}</Title>
                      <Close onClick={erase} src={`${prefix}/imgs/exit.png`} />
                    </>
                  ) : null}
                </Event>
              </ConditionalEvent>
            </>
          );
        }
      })}

      <Calendar handleDay={onChange} events={events} />
    </Container>
  );
};

export default Cal
