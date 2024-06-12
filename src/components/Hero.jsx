import Navbar from './Navbar'

export default function Hero() {
    return (
        <div className='bg-black'>
            <div className="bg-white w-full max-h-[710px] h-screen rounded-[46px] rounded-t-none flex flex-col items-center justify-center">
                <Navbar />

                <div className='text-center h-full mb-20 flex flex-col px-4 justify-center'>
                    <h1 className='sm:text-base text-sm'>
                        Hello 👋🏻, I am <span className='text-orange font-medium'>Dwi Bagaskara</span> and I am a
                    </h1>
                    <h2 className='md:text-7xl text-4xl font-semibold my-5'>
                        Front-End Developer <br />
                        Based In Indonesia
                    </h2>
                    <p className='sm:text-base text-sm'>
                        Creating a stunning digital world, where every click and swipe becomes a new adventure for users
                    </p>

                    <div className='mb-5'>
                        <button className='mt-5 py-2 px-6 bg-orange text-white rounded-full mr-4'>
                            <a href="#project">
                                See my <span className='font-semibold'>Project</span>
                            </a>
                        </button>

                        <button className='sm:mt-5 mt-2 py-2 px-6 text-orange border-orange border-2 rounded-full mr-4'>
                            <a href="mailto:dwibagaskara55@gmail.com">
                                Email Me 📩
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
