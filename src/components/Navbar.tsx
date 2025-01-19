import { useRef, useState } from 'react';
import Button from './ui/Button';
import { cn } from '../utils/helper';
import { navLinks, type TNavLink } from '@/src/mockData/navLinks';
import {audioBarsData} from '@/src/mockData/audioBars';
import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {useScrollDirection} from '../utils/scrrollHelper';

import audioFile from '/audio/loop.mp3';
import logo from '/img/logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const {isScrollingUp,isAtTop} = useScrollDirection();
  const [isPlay, setIsPlay] = useState(false);
  const navRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  

  const toggleAudio = () => {
    if (!isPlay) {
      setIsPlay(true);
      audioRef.current!.play();
    } else {
      setIsPlay(false);
      audioRef.current!.pause();
    }
  };


  return (
    <div
      ref={navRef}
      className={cn(isAtTop ? "bg-none" : isScrollingUp && "bg-black","fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 rounded-md")}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center  justify-around md:justify-between p-4 ">
          <div className="flex items-center gap-0 md:gap-7">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <Button
              id="navButton"
              className="hidden gap-1 bg-blue-50 hover:bg-blue-400 md:flex"
              title="products"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="block">
              {navLinks.map((item: TNavLink) => (
                <a  href={`#${item.name.toLowerCase()}`} key={item.id} className="nav-hover-btn">
                  {item.name}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudio}
            >
              <audio ref={audioRef} src={audioFile} loop className="hidden" />

              {audioBarsData.map((item) => (
                <div
                  key={item.id}
                  style={{ animationDelay: `${item.delay}ms` }}
                  className={cn(
                    isPlay && 'animate-bounce ',
                    `indicator-line delay-${item.delay}`
                  )}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
