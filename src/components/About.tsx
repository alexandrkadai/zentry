import { useRef } from "react";
import aboutImg from '/img/about.webp';

export default function About() {
    const clipRef = useRef(null);
  return (
    <div className="min-h-screen w-screen relative">
      <div className=" mb-8 mt-10 flex flex-col items-center gap-2">
        <h2 className="text- font-general text-sm font-bold uppercase md:text-[30px]">
          welcome to zentry
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          <p className="uppercase">
            Discover The Worlds Largest Shared Adventure
          </p>
        </div>
        <div className="absolute bottom-10">
          <p className="font-bold tracking-wider">
            The Game of Games begins your life, now an epic MMORPG
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" ref={clipRef}>

      <div className="mask-clip-path about-image">
        <img src={aboutImg} alt="main section image" />

      </div>
      </div>
    </div>
  );
}
