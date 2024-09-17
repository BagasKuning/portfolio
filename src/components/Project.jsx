import ccorner from '../img/ccorner.png'
import dashview from '../img/dashview.png'
import drivedeal from '../img/drivedeal.png'
import rlestate from '../img/rlestate.png'

export default function Project() {
    const project = [
        {
            title: 'CCORNER',
            subtitle: 'Modern cafe website with a comfortable atmosphere, delicious food and fresh drinks.',
            img: ccorner,
            link: 'https://ccorner.netlify.app'
        },
        {
            title: 'DashView',
            subtitle: 'Dashboard interactive charts, data tables, search, and responsive dark/light themes.',
            img: dashview,
            link: 'https://dashhvieww.netlify.app'
        },
        {
            title: 'DriveDeal',
            subtitle: 'Rental car search site with complete listings and detailed information.',
            img: drivedeal,
            link: 'https://drivedeal.netlify.app'
        },
        {
            title: 'Rlestate',
            subtitle: 'Real estate website with complete property listings, detailed information, and responsive design.',
            img: rlestate,
            link: 'https://rlestate.netlify.app'
        },
    ]

    return (
        <div className='lg:px-16 px-5 py-24 z-20 bg-[#ffff] text-black relative' id='project'>

            <div className='grid grid-cols-2 sm:gap-24 gap-6'>
                <h1 className='text-4xl mb-10'>My Project</h1>
                <p className=' mt-12'>
                    Transforming Innovative Ideas into Engaging and User-Centric Digital Realities with Seamless Functionality and Stunning Visuals
                </p>
                {
                    project.map((item, index) => (
                        <a className={`${index % 2 === 1 ? "mt-12" : ""}`} href={item.link} key={index}>
                            <div className='w-full bg-[#f3f7f7] flex flex-col items-center lg:p-20 sm:p-12 p-5'>
                                <img src={item.img} alt="ccorner" className='w-full h-auto object-cover' />
                            </div>
                            <h2 className='lg:text-3xl text-xl mt-8 mb-2'>{item.title}</h2>
                            <p className='opacity-75 pr-2 sm:text-base text-sm'>{item.subtitle}</p>
                        </a>
                    ))
                }
            </div>

        </div>
    )
}
