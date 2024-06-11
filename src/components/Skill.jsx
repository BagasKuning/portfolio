import bg from '../img/skill-bg.jpg'

export default function Skill() {
  return (
    <div className="bg-white text-black py-24">
      <div className="flex px-5 gap-10">
        <h1 className="flex-1 text-4xl">
          Hard skills, Soft skills, and Experience that I have
        </h1>
        <p className="flex-1">
        I prioritize the use of JavaScript in my projects because of its powerful capabilities in building dynamic and interactive user interfaces. However, I am also always eager to expand my horizons in new directions by exploring the latest technologies.
        </p>
      </div>

      <div className="flex mt-16">
        <ul className="lg:w-[500px] w-[300px] pr-5">
          <li className="my-6 flex items-center relative">
            <i className="bi bi-book-half text-xl mx-5 px-3 py-2 bg-orange text-white rounded-full" />
            <div>
              <h2 className="mb-1 font-medium">Committed to Lifelong Learning</h2>
              <p className="text-sm">
                I continually update my skills to stay relevant in the dynamic and ever-changing world of technology.
              </p>
            </div>
          </li>

          <li className="my-6 flex items-center relative">
            <i className="bi bi-balloon-fill text-xl mx-5 px-3 py-2 bg-orange text-white rounded-full" />
            <div>
              <h2 className="mb-1 font-medium">Consistent and Reliable</h2>
              <p className="text-sm">
                I guarantee quality and reliability in every project, always delivering innovative and timely solutions.
              </p>
            </div>
          </li>

          <li className="my-6 flex items-center">
            <i className="bi bi-people-fill text-xl mx-5 px-3 py-2 bg-orange text-white rounded-full" />
            <div>
              <h2 className="mb-1 font-medium">Team Building</h2>
              <p className="text-sm">
                Membangun kemitraan dan sinergi yang kuat antar anggota tim untuk mencapai tujuan bersama secara efektif.
              </p>
            </div>
          </li>

        </ul>

        <div className="flex-1 rounded-l-3xl bg-cover bg-center" style={{backgroundImage: `url('${bg}')`}}>

        </div>
      </div>
    </div>
  )
}
