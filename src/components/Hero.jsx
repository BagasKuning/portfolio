import me from '../img/me.jpg'

export default function Hero() {
  return (
    <div className="w-full bg-blue-200">
        <div className='flex p-5 h-[500px] bg-black text-white gap-2 m-2 rounded-3xl'>
            <div className='hero-left relative bg-sand flex-1 rounded-2xl'>
                
            </div>

            <div className='hero-center relative flex-1 flex flex-col items-center justify-center text-center'>
                <img 
                    src={me} 
                    alt=""
                    className='rounded-full w-28 h-28'
                />
                <h1 className='mt-8 mb-2 text-lg opacity-70'>DWI BAGASKARA</h1>
                <p className='text-5xl font-semibold z-10'>Connecting creativity with technology</p>
            </div>

            <div className='hero-right relative flex-1 rounded-2xl bg-cover bg-center'>

            </div>
        </div>

    </div>
  )
}
