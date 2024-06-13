import bg from '../img/skill-bg.jpg'

export default function Skill() {
  return (
    <div className='bg-black'>
      <div className="px-5 bg-white rounded-3xl py-24">
        <div className="flex sm:flex-row flex-col sm:gap-20 gap-5">
          <h1 className="flex-1 text-4xl font-medium">
            My Skills and Work Approach
          </h1>
          <p className="flex-1">
            I prioritize the use of JavaScript in my projects because of its powerful capabilities in building dynamic and interactive user interfaces. However, I also always broaden my horizons about something by exploring the latest technology.
          </p>
        </div>

        <div className="flex md:flex-row flex-col-reverse mt-16">

          <ul className="md:w-[500px] w-full md:pr-5 pr-0">
            <li className="my-6 flex items-center relative">
              <i className="bi bi-book-half text-xl mr-5 px-3 py-2 bg-orange text-white rounded-full" />
              <div>
                <h2 className="mb-1 font-medium">Committed to Lifelong Learning</h2>
                <p className="text-sm">
                  I continually update my skills to stay relevant in the dynamic and ever-changing world of technology.
                </p>
              </div>
            </li>

            <li className="my-6 flex items-center relative">
              <i className="bi bi-balloon-fill text-xl mr-5 px-3 py-2 bg-orange text-white rounded-full" />
              <div>
                <h2 className="mb-1 font-medium">Consistent and Reliable</h2>
                <p className="text-sm">
                  I guarantee quality and reliability in every project, always delivering innovative and timely solutions.
                </p>
              </div>
            </li>

            <li className="my-6 flex items-center">
              <i className="bi bi-people-fill text-xl mr-5 px-3 py-2 bg-orange text-white rounded-full" />
              <div>
                <h2 className="mb-1 font-medium">Team Building</h2>
                <p className="text-sm">
                  Membangun kemitraan dan sinergi yang kuat antar anggota tim untuk mencapai tujuan bersama secara efektif.
                </p>
              </div>
            </li>

          </ul>

          <div className="md:mb-0 mb-10 w-full md:translate-x-5 translate-x-0 md:h-auto h-[300px] md:rounded-l-3xl rounded-l-none bg-cover bg-center" style={{ backgroundImage: `url('${bg}')` }}>
            
            <div className=' whitespace-nowrap py-[14px] px-6 bg-[#d2eb79] absolute right-10 -translate-y-1/2 text-sm'>

              <div className='inline-flex items-center pr-4 border-r'>
                <span className='text-2xl font-semibold mr-3'>
                {new Date().getFullYear() - 2006}
                </span>
                Years <br/> Old
              </div>
              <div className='inline-flex items-center pl-4'>
                <span className='text-2xl font-semibold mr-3'>
                  {new Date().getFullYear() - 2022}+
                </span>
                Years <br/> Experience
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
