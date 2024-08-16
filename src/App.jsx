import sedan from '../images/icon-sedans.svg';
import suvs from '../images/icon-suvs.svg';
import luxury from '../images/icon-luxury.svg';


import './App.css'

export default function App() {
  return (
    <div className='flex justify-center items-center md:h-screen'>

      <div className='grid grid-rows- md:grid-cols-3 rounded-3xl my-8 mx-3'>
        
        {/* Sedans Card */}
        <div className='bg-bright-orange rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-3xl flex flex-col items-start justify-center gap-7 p-8 text-white'>
          <img src={sedan} alt="Sedan" />
          <h1 className='font-lexend text-2xl font-bold tracking-tight'>SEDANS</h1>
          <p className='font-bigShoulders text-transparent-white'>
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
          </p>
          <button className='bg-white text-bright-orange px-6 py-2 rounded-3xl font-medium font-lexend mt-3'>Learn More</button>
        </div>

        {/* SUVs Card */}
        <div className='bg-dark-cyan flex flex-col items-start justify-center gap-7 p-8 text-white'>
          <img src={suvs} alt="SUVs" />
          <h1 className='font-lexend text-2xl font-bold tracking-tight'>SUVS</h1>
          <p className='font-bigShoulders text-transparent-white'>
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
          </p>
          <button className='bg-white text-dark-cyan px-6 py-2 rounded-3xl font-medium font-lexend mt-3'>Learn More</button>
        </div>

        {/* Luxury Card */}
        <div className='bg-very-dark-cyan rounded-b-3xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl flex flex-col items-start justify-center gap-7 p-8 text-white'>
          <img src={luxury} alt="Luxury" />
          <h1 className='font-lexend text-2xl font-bold tracking-tight'>LUXURY</h1>
          <p className='font-bigShoulders text-transparent-white'>
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className='bg-white text-dark-cyan px-6 py-2 rounded-3xl font-medium font-lexend mt-3'>Learn More</button>
        </div>

      </div>

    </div>
  )
}

