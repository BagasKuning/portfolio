export default function Footer() {
    return (
        <footer className='mt-7 max-w-[1500px] w-full mx-auto bg-black text-[#ffffff90] sm:px-7 px-3 py-3 sm:text-base text-xs'>

            <div className=" inline-flex sm:gap-7 gap-3">
                <a href="https://github.com/BagasKuning">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/dwi-bagaskara-181148264/">
                    LinkedIn
                </a>
                <a href="https://www.instagram.com/d.bagask_/" className="hidden sm:inline">
                    Instagram
                </a>
            </div>

            <span className="inline float-right italic">
                <i className="bi bi-telephone mr-2"></i>
                +6285834244858
            </span>

        </footer>
    )
}
