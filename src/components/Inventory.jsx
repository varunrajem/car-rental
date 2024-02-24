import Image from "next/image"
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";

const Inventory = (props) => {
  return (
    <>
      <div id="inventory" className="h-auto w-auto shadow-md rounded-md">
        <Image src={props.pic} alt="Image" className="p-2 rounded-lg hover:scale-105 transition duration-500 cursor-pointer" />
        <div className="px-4">
          <p className="text-md font-bold">{props.name}</p>
          <div className="flex justify-between py-1">
            <div className="flex items-center">
              <MdAirlineSeatReclineExtra size={22} className="text-blue-500" />
              <p>{props.seats}</p>
            </div>
            <div className="flex items-center">
              <BsFillFuelPumpFill size={22} className="text-blue-500" />
              <p>{props.fuel}</p>
            </div>
            <div className="flex items-center">
              <IoIosSpeedometer size={22} className="text-blue-500" />
              <p>{props.speed}</p>
            </div>
          </div>
          <div className="flex justify-around items-center border-t border-gray-600 py-3">
            <div className="font-bold text-sm">{props.price}</div>
            <button className="bg-blue-500 px-6 py-1 rounded-md">Book Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory