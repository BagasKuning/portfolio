import me from '../img/me.jpg'

export default function Navbar() {
    return (
        <nav className='lg:w-[65%] md:w-[80%] w-[90%] my-10 min-w-max flex bg-black text-white items-center justify-around py-5 px-8 rounded-full'>

            <span className='relative before:absolute before:w-full before:h-1 before:bottom-0 before:bg-sand'>
                Portfolio
            </span>
            <a href="github">
                Github
            </a>

            <div />
            <img src={me}
                alt=""
                className=' w-24 h-24 rounded-full absolute border-white border-4'
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
