const Choose = (props) => {
  return (
    <>
      <div id="choose" className='flex justify-center items-center h-40'>
        <div className='w=[30%]'>
          <div className="flex justify-center items-center bg-blue-500 p-6 rounded-sm">
            {props.icon}
          </div>

        </div>
        <div className='w-[70%]'>
          <div className="px-2">
            <p className="font-bold">{props.title}</p>
            <p className="text-sm">{props.desc}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Choose