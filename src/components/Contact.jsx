import Image from "next/image"
import banner from '../../public/Ferrari.png'

const Contact = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="w-1/2 px-6">
          <p className="text-3xl font-bold">Ready To Get Start ?</p>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vehicula risus eu volutpat.
            Vivamus tincidunt est vel nunc bibendum gravida. Aenean iaculis, elit vitae eleifend luctus, elit dolor</h1>
          <button className="bg-blue-500 px-6 py-2 rounded-md">Contact Us</button>
        </div>
        <div className="w-1/2">
          <Image src={banner} alt="Banner" />
        </div>
      </div>
    </>
  )
}

export default Contact