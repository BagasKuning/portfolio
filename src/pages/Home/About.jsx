import React, { useEffect, useRef, useState } from "react";
import EachUtils from "../../utils/EachUtils";

export default function Skill() {
  const skill = [
    "HTML",
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
  ];

  const [isInView, setIsInView] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const currentRef = divRef.current;
    const handleScroll = () => {
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        // Update isInView if scroll has passed the element
        if (
          window.scrollY > rect.top + window.scrollY ||
          rect.top + currentRef.offsetHeight / 1.8 < window.innerHeight
        ) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     if (entry.isIntersecting) {
    //       setIsInView(true);
    //     }
    //   },
    //   { threshold: 0.8 } // Threshold 0.8 means the animation starts when 80% of the component is visible
    // );

    // if (currentRef) {
    //   observer.observe(currentRef);
    // }

    window.addEventListener("scroll", handleScroll);

    return () => {
      // if (currentRef) {
      //   observer.unobserve(currentRef);
      // }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-black" id="about">
      <div className="bg-white text-black rounded-t-3xl lg:px-16 px-6 py-24">
        <div className="flex md:flex-row flex-col">
          <div className="flex-1 flex flex-col justify-center gap-5">
            <h1 className="italic text-4xl mb-5 after:absolute relative after:w-1/2 after:h-2 after:bg-gradient-to-r after:from-secondary after:to-white after:left-0 after:bottom-0 after:translate-y-2">
              Get to Know Me Closer
            </h1>
            <p>
              I prioritize the use of JavaScript in my projects because of its
              powerful capabilities in building dynamic and interactive user
              interfaces. However, I also always broaden my horizons about
              something by exploring the latest technology.
              <br />
              <span className=" font-medium">My Skill :</span>
            </p>
            <div className="flex gap-20">
              <ul>
                {
                  <EachUtils
                    of={skill.slice(0, 6)}
                    render={(item) => ListSkill(item)}
                  />
                }
              </ul>
              <ul>
                {
                  <EachUtils
                    of={skill.slice(6)}
                    render={(item) => ListSkill(item)}
                  />
                }
              </ul>
            </div>
          </div>

          <div className="flex-1 relative md:mt-0 mt-14">
            <div
              className="relative md:h-[500px] sm:h-[530px] h-[380px] md:w-10/12 w-full float-right"
              ref={divRef}
            >
              {/* ombak */}
              <div className="absolute bottom-0 w-full h-1/2 bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  className=" -translate-y-[98%]"
                >
                  <path
                    fill="#C7EEFF"
                    fillOpacity="1"
                    d="M0,192L17.1,186.7C34.3,181,69,171,103,176C137.1,181,171,203,206,202.7C240,203,274,181,309,154.7C342.9,128,377,96,411,122.7C445.7,149,480,235,514,224C548.6,213,583,107,617,101.3C651.4,96,686,192,720,208C754.3,224,789,160,823,144C857.1,128,891,160,926,176C960,192,994,192,1029,208C1062.9,224,1097,256,1131,234.7C1165.7,213,1200,139,1234,128C1268.6,117,1303,171,1337,197.3C1371.4,224,1406,224,1423,224L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
                  ></path>
                </svg>
              </div>
              {/* image */}
              <div
                className={` bg-about absolute h-full w-full bg-cover bg-top transform transition-transform duration-700 ease-in-out 
                  ${isInView ? "translate-y-0" : "translate-y-full"}`}
              />
              {/* penutup saat image di bawah */}
              <div className={`w-full h-full bg-white translate-y-full`} />
            </div>

            {/* <img src={me} alt="" className='md:h-[500px] h-[380px] md:w-10/12 w-full float-right object-cover rounded-3xl' /> */}
            <div className="z-10 absolute whitespace-nowrap md:bottom-10 bottom-0 md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 md:translate-y-0 translate-y-1/2">
              <BarInfo
                title={"Years Old"}
                desc={new Date().getFullYear() - 2006}
              />
              <BarInfo
                title={"Years Experience"}
                desc={new Date().getFullYear() - 2022 + "+"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-16 absolute bottom-0 bg-white" />
    </div>
  );
}

const ListSkill = (item) => {
  return (
    <li>
      <span className="text-primary">{"<>"}</span> {item}
    </li>
  );
};

const BarInfo = ({ title, desc }) => {
  return (
    <div className="inline-flex md:flex text-wrap bg-primary text-white shadow-md items-center py-2 px-5 m-2 rounded-lg ">
      <span className="text-2xl font-semibold mr-2">{desc}</span>
      <EachUtils
        of={title.split(" ")}
        render={(item) => (
          <>
            {item} <br />
          </>
        )}
      />
    </div>
  );
};
