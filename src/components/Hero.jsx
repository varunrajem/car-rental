import Image from "next/image"
import Heropic from '../../public/f.png'

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <div className="w-[50%] px-8">
          <p className="text-6xl font-bold">Drive Your Way<br />to Freedom
            <span className="text-blue-500">&nbsp;Rent</span>&nbsp;a Car<br />Today</p>
          <div className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, quam id ullamcorper hendrerit, odio dui condimentum ipsum, ut finibus lacus nisl quis mi.</div>
          <div className="space-x-4">
            <button className="bg-blue-500 px-6 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg hover:border border-black">Rent Car</button>
            <button className="bg-blue-500 px-6 py-2 rounded-tl-lg rounded-bl-lg rounded-br-lg hover:bg-white hover:border border-black">Call Now</button>
          </div>
        </div>

        <div className="w-[50%] ">
          <Image src={Heropic} alt="" />
        </div>
      </div>

      {/*******  Search ********/}





    </>
  )
}

export default Hero