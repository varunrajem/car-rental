"use client"

import { useRouter } from "next/navigation"

const Footor = () => {
  const router = useRouter()

  return (
    <>
      <div className="sm:flex block justify-between items-center w-full h-24 shadow-md bg-gray-100 px-3 py-2">
        <div className="text-xl font-bold tracking-widest">DEV VARUN</div>
        <div className="">This site by made by <span onClick={() => router.push('https://varunraje.vercel.app/')} className="underline cursor-pointer text-blue-800">Varunraje</span></div>
        <div className="flex justify-end gap-3 ">
          <p className="cursor-pointer">Contact Us</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </>
  )
}

export default Footor