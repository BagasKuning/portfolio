import me from '../img/me.jpg'

export default function Navbar() {
    return (
        <nav className=' sm:text-base text-xs z-10 md:w-[65%] w-[97%] my-10 min-w-max flex bg-black text-white items-center justify-around sm:py-5 sm:px-8 py-4 px-5 rounded-full'>

            <span className='relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-sand'>
                Portfolio
            </span>
            <a href="github">
                Github
            </a>

            <div className='w-16' />
            <img src={me}
                alt=""
                className=' sm:w-24 sm:h-24 w-16 h-16 rounded-full absolute border-white border-4'
            />

            <a href="project">
                Linkedin
            </a>
            <a href="resume">
                Resume
            </a>

        </nav>
    )
}
