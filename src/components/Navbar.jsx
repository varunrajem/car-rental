import Link from "next/link"

const Navbar = () => {

  const NavLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Rent Car',
      path: '/rentcar'
    },
    {
      name: 'Contact Us',
      path: '/contact'
    },
    {
      name: 'About Us',
      path: '/about'
    },
    {
      name: 'Blog',
      path: '/blog'
    },
  ]
  return (
    <>
      <div className="flex justify-between items-center w-full h-16 shadow-sm px-8 sticky">
        <p className="text-xl font-bold">DEV VARUN</p>
        <div className="flex gap-8">{
          NavLinks.map((e, i) => {
            return (
              <div key={i}>
                <Link href={e.path}>{e.name}</Link>
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