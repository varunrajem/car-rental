import Inventory from "@/components/Inventory"
import Lamborgini from '../../public/Lamborghini.jpg'
import BMW from '../../public/BMW.jpg'
import Mercedes from '../../public/Mercedes.jpg'
import Porche from '../../public/Porche.jpg'
import Audi from '../../public/Audi.jpg'
import Mclaren from '../../public/mclaren.jpg'
import Hero from "@/components/Hero"
import Achievement from "@/components/Achievement"
import Choose from "@/components/Choose"
import { IoIosCall } from "react-icons/io";
import { IoIosPricetag } from "react-icons/io";
import { GrLicense } from "react-icons/gr";
import { TiCancel } from "react-icons/ti";
import Contact from "@/components/contact"

const page = () => {
  return (
    <>
      <div>
        <Hero />
      </div>


      {/****** INVENTORY ******/}
      <div className="flex justify-center py-8">
        <p className="text-4xl font-bold">Latest<span className="text-blue-500">&nbsp;Inventory</span></p>
      </div>
      <div className="grid grid-cols-3 px-12 py-2 gap-4">
        <Inventory pic={Lamborgini} name='Lamborgini' seats='2 seats' fuel='10L' speed='440km/h' price='8000Rs/hr' />
        <Inventory pic={BMW} name='BMW' seats='2 seats' fuel='12L' speed='330km/h' price='4000Rs/hr' />
        <Inventory pic={Mercedes} name='Mercedes' seats='4 seats' fuel='10L' speed='320 km/h' price='6000Rs/hr' />
        <Inventory pic={Porche} name='Porche' seats='2 seats' fuel='11L' speed='290 km/h' price='5000Rs/hr' />
        <Inventory pic={Audi} name='Audi' seats='4 seats' fuel='13L' speed='310 km/h' price='5000Rs/hr' />
        <Inventory pic={Mclaren} name='Mclaren' seats='2 seats' fuel='12L' speed='330km/h' price='7000Rs/hr' />
      </div>

      {/****** WHY CHOOSE US ******/}
      <div className="flex justify-center py-8">
        <p className="text-4xl font-bold">Why<span className="text-blue-500">&nbsp;Choose</span>&nbsp;Us</p>
      </div>
      <div className="grid grid-cols-2 px-12 py-2 gap-4">
        <Choose icon=<IoIosCall size={32} /> title='24 hr Support' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vehicula risus eu volutpat.' />
        <Choose icon=<IoIosPricetag size={32} /> title='Best Price' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vehicula risus eu volutpat.' />
        <Choose icon=<GrLicense size={32} /> title='Verified License' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vehicula risus eu volutpat.' />
        <Choose icon=<TiCancel size={32} /> title='Free Cancellation' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper vehicula risus eu volutpat.' />
      </div>

      {/****** OUR ACHEVEMENT ******/}
      <div className="flex justify-center py-8">
        <p className="text-4xl font-bold">Our<span className="text-blue-500">&nbsp;Achievement</span></p>
      </div>
      <div className="grid grid-cols-4 px-12 py-2 gap-4">
        <Achievement data='5000+' desc='Active Members' />
        <Achievement data='6000+' desc='Car Models' />
        <Achievement data='1000+' desc='Car Model' />
        <Achievement data='10k+' desc='Positive Rating' />
      </div>

      {/****** CONTACT ******/}
      <div className="py-12">
        <Contact />
      </div>




    </>
  )
}

export default page