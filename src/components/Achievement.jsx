"use client"

import CountUp from 'react-countup';


const Achievement = (props) => {
  return (
    <>
      <div id='achievement' className="flex justify-center items-center h-[140px] w-full shadow-lg bg-white rounded-sm text-center">
        <div>
          <p className="font-bold text-xl">
            <CountUp
              end={props.data}
              duration={props.time}
            />
          </p>
          <p>{props.desc}</p>
        </div>

      </div>
    </>

  )
}

export default Achievement