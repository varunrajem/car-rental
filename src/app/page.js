import Inventory from "@/components/Inventory"
import Lamborgini from '../../public/Lamborghini.jpg'
import BMW from '../../public/BMW.jpg'
import Mercedes from '../../public/Mercedes.jpg'
import Porche from '../../public/Porche.jpg'
import Audi from '../../public/Audi.jpg'
import Mclaren from '../../public/mclaren.jpg'
import Hero from "@/components/Hero"


const page = () => {
  return (
    <>
      <div>
        <Hero />
      </div>

      <div className="flex justify-center py-4">
        <p className="text-4xl font-bold">Latest<span className="text-blue-500">&nbsp;Inventory</span></p>
      </div>
      <div className="grid grid-cols-3 px-12 py-2 gap-4">
        <Inventory pic={Lamborgini} name='Lamborgini' />
        <Inventory pic={BMW} name='BMW' />
        <Inventory pic={Mercedes} name='Mercedes' />
        <Inventory pic={Porche} name='Porche' />
        <Inventory pic={Audi} name='Audi' />
        <Inventory pic={Mclaren} name='Mclaren' />
      </div>


    </>
  )
}

export default page