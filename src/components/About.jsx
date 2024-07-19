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
            <div className='relative md:h-[500px] sm:h-[530px] h-[380px] md:w-10/12 w-full float-right'>
              <div className='z-10 bg-about absolute h-full w-full bg-cover bg-top rounded-3xl' />
              <div className='absolute bottom-0 w-full h-1/2 z-0 bg-orange rounded-b-3xl'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=' -translate-y-[98%]'>
                  <path fill="#FF8132" fill-opacity="1" d="M0,32L18.5,74.7C36.9,117,74,203,111,213.3C147.7,224,185,160,222,160C258.5,160,295,224,332,250.7C369.2,277,406,267,443,229.3C480,192,517,128,554,90.7C590.8,53,628,43,665,58.7C701.5,75,738,117,775,154.7C812.3,192,849,224,886,202.7C923.1,181,960,107,997,101.3C1033.8,96,1071,160,1108,192C1144.6,224,1182,224,1218,192C1255.4,160,1292,96,1329,58.7C1366.2,21,1403,11,1422,5.3L1440,0L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
                </svg>
              </div>
            </div>
            {/* <img src={me} alt="" className='md:h-[500px] h-[380px] md:w-10/12 w-full float-right object-cover rounded-3xl' /> */}

            <div className=' z-10 absolute whitespace-nowrap md:bottom-10 bottom-0 md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 md:translate-y-0 translate-y-1/2'>
              <div className='md:flex inline-flex bg-white shadow items-center justify-center py-2 px-5 rounded-lg md:mb-4 mb-0 mr-4'>
                <span className='text-2xl font-semibold mr-3'>
                  {new Date().getFullYear() - 2006}
                </span>
                Years <br /> Old
              </div>

              <div className='md:flex inline-flex bg-white shadow items-center justify-center py-2 px-5 rounded-lg'>
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
