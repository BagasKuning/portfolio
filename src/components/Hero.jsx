import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top",
          end: "10px",
          scrub: 1,
          pin: "#hero-section",
        },
      });

      tl.to(".hero-img", {
          height: 0, // Mengubah tinggi ".hero-img" menjadi 0
          ease: "none", // Tanpa easing untuk efek yang lebih mulus
          duration: 10
        })
        .to(".hero-desc", {
        opacity: 0
      })
        
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div
      className="relative md:text-6xl sm:text-5xl text-3xl w-full h-screen bg-black"
    >
      <div 
        id="hero-section" 
        ref={container}
        className="fixed top-0 left-1/2 -translate-x-1/2 max-w-[1600px] w-full h-screen flex flex-col justify-center"
      >
        {/* <span
          className="hero-text-stroke z-0 select-none opacity-[4%] text-[10rem] absolute 2xl:top-24 top-0 
                      -translate-x-16 whitespace-nowrap text-black"
        >
          DWIBAGASKARADWIBAGASKARA
        </span> */}

        <div className="mb-1 relative sm:px-12 px-4 flex justify-between items-end max-sm:gap-1">
          <h1 className="z-10 relative text-primary font-medium italic">
            DWI BAGASKARA
          </h1>
          <p className="hero-desc sm:w-1/5 w-1/3 2xl:text-base text-xs max-sm:text-[9px]">
            Creating a stunning digital world, where every click and swipe
            becomes a new adventure for users
          </p>
        </div>

        <div className="hero-img z-10  w-full h-1/3 max-h-[280px] bg-white" />

        <span className="sm:px-12 px-4 font-medium italic">
          PROGRAMMER <br />
          BASED IN INDONESIA
        </span>
      </div>
    </div>
  );
}
