import ccorner from '../img/ccorner.png'

export default function Project() {
    const project = [
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },
        {
            title: 'CCORNER',
            subtitle: 'lorem alskdjfhalksjdfhalksjdfhaklsjdfaklsdj aksjdfaoiuwefb qiowehbfqowheb fqiowhefpqowihdfkjasdflkajsdhfklja shdflk',
            img: ccorner,
            src: 'https://ccorner.netlify.app'
        },

    ]

    return (
        <div className='lg:px-16 px-6 py-24'>

            <div className='grid grid-cols-2 gap-10'>
                <h1 className='text-4xl mb-10 ml-16'>My Project</h1>
                <p className=' mt-5'>
                    Transforming Innovative Ideas into Engaging and User-Centric Digital Realities with Seamless Functionality and Stunning Visuals
                </p>
                {
                    project.map((item, index) => (
                        <a className={`${index % 2 === 1 ? "mt-10" : ""}`} href={item.src}>
                            <div className='w-full bg-[#F5F7F8] flex flex-col items-center md:p-16'>
                                <img src={item.img} alt="ccorner" className='w-full h-auto object-cover' />
                            </div>
                            <h2 className='lg:text-4xl text-xl mt-8 mb-2'>{item.title}</h2>
                            <p className='opacity-75'>{item.subtitle}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
