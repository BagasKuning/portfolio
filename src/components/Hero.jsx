import Navbar from './Navbar'

export default function Hero() {
    return (
        <div className="bg-white text-black w-full h-screen rounded-[46px] rounded-t-none flex flex-col items-center justify-center">
            <Navbar/>

            <div className='text-center h-full mt-10 flex flex-col'>
                <h1>
                    Hello 👋🏻, I am <span className='text-orange'>Dwi Bagaskara</span> and I am a
                </h1>
                <h2 className='text-7xl font-semibold my-5'>
                    Front-End Developer <br/>
                    Based In Indonesia
                </h2>
                <p>
                    Creating a stunning digital world, where every click and swipe becomes a new adventure for users
                </p>

                <div className='my-5'>
                    <button className=' py-2 px-6 bg-orange text-white rounded-full mr-4'>
                        <a href="#project">
                            See my <span className='font-semibold'>Project</span> 🧑🏻‍💻
                        </a>
                    </button>

                    <button className=' py-2 px-6 text-orange border-orange border-2 rounded-full'>
                        <a href="mailto:dwibagaskara55@gmail.com">
                            Email Me
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
