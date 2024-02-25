import Image from "next/image"
import Heropic from '../../public/f.png'

const Hero = () => {
  return (
    <>
      <div id="hero" className="sm:flex block justify-center items-center w-full h-screen bg-gray-100">
        <div className="w-full sm:w-[50%] px-3 py-6 sm:px-8">
          <p className="text-2xl sm:text-4xl xl:text-6xl font-bold">Drive Your Way<br />to Freedom
            <span className="text-blue-500">&nbsp;Rent</span>&nbsp;a Car<br />Today</p>
          <div className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quam id ullamcorper hendrerit, odio dui condimentum ipsum, ut finibus lacus nisl quis mi.</div>
          <div className="space-x-4">
            <button className="bg-blue-500 px-6 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg hover:border border-black">Rent Car</button>
            <button className="bg-blue-500 px-6 py-2 rounded-tl-lg rounded-bl-lg rounded-br-lg hover:bg-white hover:border border-black">Call Now</button>
          </div>
        </div>

        <div className="w-full sm:w-[50%] ">
          <Image src={Heropic} alt="" />
        </div>
      </div>

      {/*******  Search ********/}

      {/* <div className="sm:flex block justify-center relative -top-16"> */}
      <div className="shadow-xl bg-white rounded-md mx-10 sm:mx-30 xl:mx-40 -translate-y-24">
        <div className="sm:flex block justify-between items-center text-center w-full px-8 py-16">
          <div>
            <p className="text-blue-600 font-bold">Pickup Location</p>
            <input
              type="search"
              className="border border-black focus:outline-none rounded-xl px-3 w-40 bg-gray-200"
              placeholder="Your Location"
            />
          </div>
          <div>
            <p className="text-blue-600 font-bold">Pickup Date</p>
            <input
              type="date"
              className="border border-black focus:outline-none rounded-xl px-3 w-40 bg-gray-200"
              placeholder="Date"
            />
          </div>
          <div>
            <p className="text-blue-600 font-bold">Pickup Time</p>
            <input
              type="time"
              className="border border-black focus:outline-none rounded-xl px-3 w-40 bg-gray-200"
              placeholder="Time"
            />
          </div>
          <div>
            <p className="text-blue-600 font-bold">Return Time</p>
            <input
              type="time"
              className="border border-black focus:outline-none rounded-xl px-3 w-40 bg-gray-200"
              placeholder="Time"
            />
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 px-8 py-2 rounded-full">SUBMIT</button>
          </div>
        </div>
      </div>
      {/* </div> */}


    </>
  )
}

export default Hero