import reactLogo from '../img/icon/react.png'

export default function Tech() {
    const tech = [
        {
            name: 'HTML',
            logo: reactLogo,
        },
        {
            name: 'CSS',
            logo: reactLogo,
        },
        {
            name: 'JavaScript',
            logo: reactLogo,
        },
        {
            name: 'Tailwind',
            logo: reactLogo,
        },
        {
            name: 'Bootstrap',
            logo: reactLogo,
        },
        {
            name: 'React',
            logo: reactLogo,
        },
        {
            name: 'Next JS',
            logo: reactLogo,
        },
        {
            name: 'Vue',
            logo: reactLogo,
        },
        {
            name: 'Git',
            logo: reactLogo,
        },
        {
            name: 'Node Js',
            logo: reactLogo,
        },
        {
            name: 'Express',
            logo: reactLogo,
        },
        {
            name: 'MySql',
            logo: reactLogo,
        },
    ]
  return (
    <div className="bg-black text-white py-16">
        <h1 className=' text-center text-4xl font-medium mb-6'>Tech</h1>
        <div className='flex flex-wrap justify-center max-w-[600px] mx-auto gap-3 sm:gap-5 pb-6'>
            {
                tech.map(item => (
                    <div className=' w-32 pb-3 bg-gray rounded-xl'>
                        <img 
                            src={item.logo} 
                            alt=""
                            className='w-1/2 py-3 mx-auto'
                        />
                        <p className=' text-center'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
