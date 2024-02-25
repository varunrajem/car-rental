"use client"

import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";



const Navbar = () => {
  const [currenttab, setCurrentTab] = useState("Home")
  const [isopen, setisOpen] = useState(false)

  const NavLinks = [
    {
      name: 'Home',
      path: '#hero',
      icon: <IoMdHome />
    },
    {
      name: 'Rent Car',
      path: '#inventory',
      icon: <FaCarSide />
    },
    {
      name: 'Contact Us',
      path: '#contact',
      icon: <IoIosContact />
    },
    {
      name: 'Why Us',
      path: '#choose',
      icon: < FaQuestionCircle />
    },
    {
      name: 'Achievement',
      path: '#achievement',
      icon: <GiAchievement />
    },
  ]
  return (
    <>
      <div className="flex justify-between items-center w-full h-16 shadow-sm px-8 sticky top-0 z-50 bg-white">
        <p className="text-xl font-bold text-blue-600 tracking-widest">DEV VARUN</p>
        <div className="md:flex hidden gap-8">{
          NavLinks.map((e, i) => {
            return (
              <div key={i}>
                <a onClick={() => setCurrentTab(e.name)} className={currenttab == e.name ? 'text-blue-600 font-bold' : ''} href={e.path}>{e.name}</a>
              </div>
            )
          })
        }</div>
        <div className="md:flex justify-center gap-3 hidden">
          <button className='border border-blue-400 px-6 py-1 rounded-md'>Login</button>
          <button className='border border-blue-400 bg-blue-500  px-6 py-1 rounded-md text-white hover:bg-white hover:text-black'>Sign up</button>
        </div>
        <div
          className={`md:hidden hover:cursor-pointer z-20 text-2xl`}
          onClick={() => setisOpen(!isopen)}
        >
          {isopen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        {isopen &&
          <div onClick={() => setisOpen(!isopen)} className='absolute top-[65px] bg-black/75 left-0 w-full h-screen z-10'>
          </div>
        }
        {isopen ?
          <div className='absolute top-[65px] left-0 w-2/3 h-screen z-20'>
            <ul className='bg-blue-100 shadow-xl h-full'>
              {NavLinks.map((e) => {
                return (
                  <div className='flex justify-start items-center px-3 py-1 gap-3'>
                    <span className="">{e.icon}</span>
                    <li><a onClick={() => { setisOpen(!isopen); setCurrentTab(e.name) }} className={currenttab == e.name ? 'text-blue-600 font-bold' : ''} href={e.path}>{e.name}</a></li>
                  </div>
                )
              })}

            </ul></div> : ''
        }
      </div>
    </>
  )
}

export default Navbar