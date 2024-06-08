import me from '../img/me.jpg'

export default function Hero() {
    return (
        <div className="w-full bg-blue-200">
            <div className='flex p-5 md:h-[500px] h-[400px] bg-black text-white gap-2 m-2 rounded-3xl'>
                <div className='hero-left relative bg-sand flex-1 rounded-2xl'>

                </div>

                <div className='hero-center relative flex-1 flex flex-col items-center justify-center text-center'>
                    <img
                        src={me}
                        alt=""
                        className='rounded-full w-28 h-28'
                    />
                    <h1 className='mt-8 mb-2 md:text-lg sm:text-sm text-xs opacity-70'>DWI BAGASKARA</h1>
                    <p className='md:text-5xl sm:text-3xl text-xl font-semibold z-10'>Connecting creativity with technology</p>


                    <a href='#about' className='z-10 absolute bottom-0 py-10 md:px-12 px-8 sm:translate-y-[120px] translate-y-[108px] bg-black rounded-3xl'>
                        <i className="bi bi-arrow-up absolute sm:bottom-6 bottom-4 -translate-x-1/2 rotate-180 md:text-4xl text-2xl px-2 py-5 rounded-3xl bg-gray" />
                    </a>
                </div>

                <div className='hero-right relative flex-1 rounded-2xl bg-cover bg-center'>

                </div>
            </div>

        </div>
    )
}
