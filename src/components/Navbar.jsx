export default function Navbar() {
  return (
    <nav className="absolute select-none font-suse max-w-[1600px] w-full max-sm:text-sm z-10 flex bg-black justify-between items-center sm:px-5 px-2 py-5">
      <div className="italic sm:text-lg text-md">BK_</div>

      <div>
        <a href="#about" className=" mx-3 opacity-60">
          About
        </a>
        <a href="#project" className="mx-3 opacity-75">
          Project
        </a>
        <a
          href="http://localhost:3000/Dwi_Bagaskara-CV.pdf"
          className="ml-3 bg-gradient-to-tr from-primary to-blue-300 px-3 rounded py-1"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
