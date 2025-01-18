import { useRef } from "react";
import aboutImg from '/img/about.webp';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./ui/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const clipRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger:{
        trigger: clipRef.current,
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    } )

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })
  });


  return (
    <section id="about" className="min-h-screen w-screen relative">
      <div className=" mb-8 mt-10 flex flex-col items-center gap-2">
        <h2 className="text- font-general text-sm font-bold uppercase md:text-[30px]">
          welcome to zentry
        </h2>
   <AnimatedTitle title="Discover The Worlds Largest Shared Adventure" className="mt-2"/>
        <div className="absolute bottom-10">
          <p className="font-bold tracking-wider">
            The Game of Games begins your life, now an epic MMORPG
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" ref={clipRef}>

      <div className="mask-clip-path about-image">
        <img src={aboutImg} alt="main section image" className="absolute left-0 top-0 size-full object-cover"/>

      </div>
      </div>
    </section>
  );
}
