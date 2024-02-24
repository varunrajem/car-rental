

const Achievement = (props) => {
  return (
    <>

      <div className="flex justify-center items-center h-[140px] w-full shadow-lg bg-white rounded-sm text-center">
        <div>
          <p className="font-bold text-xl">{props.data}</p>
          <p>{props.desc}</p>
        </div>

      </div>
    </>

  )
}

export default Achievement