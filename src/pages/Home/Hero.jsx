import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);
  const heroImage = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          // markers: true,
          start: "top",
          end: "250px",
          scrub: .8,
          // pin: true,
        },
      });

      tl.to(".hero-img", {
        height: 0,
        // ease: "circ.out",
      }).to(".hero-desc", {
        opacity: 0,
        // ease: "circ.out",
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container} className="relative w-full h-screen bg-black">
      <div
        className="fixed font-suse md:text-6xl sm:text-5xl text-3xl top-0 max-w-[1600px] w-full h-full flex flex-col"
      >
        <TextStroke text="PORTFOLIOPORTFOLIO" topPercentValue={15} />
        <TextStroke text="PORTFOLIOPORTFOLIO" topPercentValue={20} />

        <div className="h-1/3 mb-1 sm:px-12 px-4 flex justify-between items-end gap-2">
          <h1 className="z-10 relative text-primary font-bold italic">
            DWI BAGASKARA
          </h1>
          <p className="hero-desc sm:w-1/5 w-1/3 2xl:text-base text-xs max-sm:text-[9px]">
            Creating a stunning digital world, where every click and swipe
            becomes a new adventure for users
          </p>
        </div>

        <div ref={heroImage} className="hero-img z-10 w-full h-1/3 max-h-[280px] 2xl:max-h-[360px] bg-white" />

        <span className="h-1/3 sm:px-12 px-4 font-bold italic">
          FRONTEND DEVELOPER <br />
          BASED IN INDONESIA
        </span>
      </div>
    </div>
  );
}

const TextStroke = ({ text, topPercentValue }) => {
  return (
    <span
      style={{ top: `${topPercentValue}%` }}
      className={`absolute hero-text-stroke z-0 d w-full select-none opacity-[5%] text-[10vw]
                    text-black overflow-hidden`}
    >
      {text}
    </span>
  );
};
