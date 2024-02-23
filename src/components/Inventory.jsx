import Image from "next/image"

const Inventory = (props) => {
  return (
    <>
      <div className="h-auto w-auto shadow-md rounded-md">
        <Image src={props.pic} alt="Image" className="p-2 rounded-lg hover:scale-105 transition duration-500 cursor-pointer" />
        <div className="px-4">
          <p className="text-md font-bold">{props.name}</p>
          <div>

          </div>
          <div className="flex justify-around items-center border-t border-gray-600 py-3">
            <div className="font-bold text-sm">3.32 Crore</div>
            <button className="bg-blue-500 px-6 py-1 rounded-md">Book Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory