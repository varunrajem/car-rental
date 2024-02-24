"use client"

import { useRouter } from "next/navigation"

const Footor = () => {
  const router = useRouter()

  return (
    <>
      <div className="flex justify-between items-center w-full h-16 shadow-md bg-gray-100 px-3">
        <div className="text-xl font-bold tracking-widest">DEV VARUN</div>
        <div className="font-md">This site by made by <span onClick={() => router.push('https://varunraje.vercel.app/')} className="underline cursor-pointer text-blue-800">Varunraje</span></div>
        <div className="flex gap-3">
          <p className="cursor-pointer">Contact Us</p>
          <p className="cursor-pointer">Pravicy Policy</p>
        </div>
      </div>
    </>
  )
}

export default Footor