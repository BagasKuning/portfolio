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
          end: "120px",
          scrub: 1,
          pin: "#hero-section",
        },
      });

      tl.to(".hero-img", {
        height: 0, // Mengubah tinggi ".hero-img" menjadi 0
        ease: "none", // Tanpa easing untuk efek yang lebih mulus
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div
      ref={container}
      id="hero-section"
      className="relative 2xl:text-8xl md:text-6xl sm:text-5xl text-3xl 
      overflow-x-hidden bg-black text-white w-full h-screen flex flex-col justify-center"
    >
      <span
        className="hero-text-stroke z-0 select-none opacity-[4%] text-[10rem] absolute 2xl:top-24 top-0 
                     -translate-x-16 whitespace-nowrap text-black"
      >
        DWIBAGASKARADWIBAGASKARA
      </span>

      <div className="relative sm:px-8 px-4 flex justify-between items-end max-sm:gap-4">
        <h1 className="z-10 relative text-primary font-medium italic">
          DWI BAGASKARA
        </h1>
        <p className="sm:w-1/5 w-1/3 2xl:text-base text-xs max-sm:text-[9px]">
          Creating a stunning digital world, where every click and swipe becomes
          a new adventure for users
        </p>
      </div>

      <div className="hero-img z-10  w-full h-1/3 max-h-[350px] bg-white"></div>
      <span className="sm:px-8 px-4 font-medium italic">
        FRONTEND ENGINER <br/>
        BASED IN INDONESIA
      </span>
    </div>
  );
}
