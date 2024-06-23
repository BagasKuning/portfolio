import me from '../img/me.jpg'

export default function Skill() {
  const skill = [
    'HTML',
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "Node",
    "React",
    "Next",
    "Vue",
    "Git",
    "Express",
    "MySql",
  ]

  return (
    <div className='bg-black'>
      <div id='about' className=" bg-white rounded-t-3xl lg:px-16 px-6 py-24">
        <div className='flex md:flex-row flex-col'>
          <div className='flex-1 flex flex-col justify-center gap-5'>
            <h1 className='text-4xl mb-5 after:absolute relative after:w-1/2 after:h-2 after:bg-gradient-to-r after:from-orange after:to-white after:left-0 after:bottom-0 after:translate-y-2'>Get to Know Me Closer</h1>
            <p>
              I prioritize the use of JavaScript in my projects because of its powerful capabilities in building dynamic and interactive user interfaces. However, I also always broaden my horizons about something by exploring the latest technology.
              <br />
              <span className=' font-medium'>
                My Skill :
              </span>
            </p>
            <div className='flex gap-20'>
              <ul>
                {skill.slice(0, 6).map(item => (
                  <li><span className='text-orange'>{'<>'}</span> {item}</li>
                ))}
              </ul>
              <ul>
                {skill.slice(6).map(item => (
                  <li><span className='text-orange'>{'<>'}</span> {item}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className='flex-1 relative md:mt-0 mt-14'>
            <img src={me} alt="" className='md:h-[500px] h-[380px] md:w-10/12 w-full float-right object-cover rounded-3xl' />

            <div className='absolute whitespace-nowrap md:bottom-10 bottom-0 md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 md:translate-y-0 translate-y-1/2'>
              <div className='md:flex inline-flex bg-orange items-center justify-center py-2 px-5 rounded-lg md:mb-4 mb-0 mr-4'>
                <span className='text-2xl font-semibold mr-3'>
                  {new Date().getFullYear() - 2006}
                </span>
                Years <br /> Old
              </div>
              
              <div className='md:flex inline-flex bg-orange items-center justify-center py-2 px-5 rounded-lg'>
                <span className='text-2xl font-semibold mr-3'>
                  {new Date().getFullYear() - 2022}+
                </span>
                Years <br /> Experience
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
