import me from '../img/me2-edit.jpg'

export default function Navbar() {
    return (
        <nav className=' md:text-base text-xs z-10 lg:w-[55%] md:w-[70%] w-[96%] my-10 min-w-max flex bg-black text-white items-center justify-around md:py-5 md:px-8 py-4 px-5 rounded-full'>

            <span className='relative before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-sand'>
                Portfolio
            </span>

            <a href="#about">
                About
            </a>

            <div className='w-16' />
            <img src={me}
                alt=""
                className=' md:w-24 md:h-24 w-16 h-16 rounded-full absolute border-black border-4'
            />

            <a href="#project">
                Project
            </a>
            <a href="Dwi%20Bagaskara%20Resume%20FE.pdf">
                Resume
            </a>

        </nav>
    )
}
