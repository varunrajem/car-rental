"use client"

import { useState } from "react"


const Navbar = () => {
  const [currenttab, setCurrentTab] = useState("Home")


  const NavLinks = [
    {
      name: 'Home',
      path: '#hero'
    },
    {
      name: 'Rent Car',
      path: '#inventory'
    },
    {
      name: 'Contact Us',
      path: '#contact'
    },
    {
      name: 'Why Us',
      path: '#choose'
    },
    {
      name: 'Achievement',
      path: '#achievement'
    },
  ]
  return (
    <>
      <div className="flex justify-between items-center w-full h-16 shadow-sm px-8 sticky top-0 z-30 bg-white">
        <p className="text-xl font-bold">DEV VARUN</p>
        <div className="flex gap-8">{
          NavLinks.map((e, i) => {
            return (
              <div key={i}>
                <a onClick={() => setCurrentTab(e.name)} className={currenttab == e.name ? 'text-blue-600 font-bold' : ''} href={e.path}>{e.name}</a>
              </div>
            )
          })
        }</div>
        <div className="flex justify-center gap-3">
          <button className='border border-blue-400 px-6 py-1 rounded-md'>Login</button>
          <button className='border border-blue-400 bg-blue-500  px-6 py-1 rounded-md text-white hover:bg-white hover:text-black'>Sign up</button>
        </div>
      </div>
    </>
  )
}

export default Navbar