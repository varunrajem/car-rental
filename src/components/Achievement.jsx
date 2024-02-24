"use client"

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Achievement = (props) => {
  const [counterstart, setCounterStart] = useState(false)

  return (
    <>
      <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
        <div id='achievement' className="flex justify-center items-center h-[140px] w-full shadow-lg bg-white rounded-sm text-center">
          <div>
            <p className="font-bold text-xl">{
              counterstart ? <CountUp
                start={0}
                end={props.data}
                duration='5'
              /> : ''
            }
              +
            </p>
            <p>{props.desc}</p>
          </div>

        </div>
      </ScrollTrigger>
    </>

  )
}

export default Achievement