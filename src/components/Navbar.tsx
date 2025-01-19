import { useRef, useState } from 'react';
import { cn } from '../utils/helper';
import { navLinks, type TNavLink } from '@/src/mockData/navLinks';
import { audioBarsData } from '@/src/mockData/audioBars';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useScrollDirection } from '../utils/scrrollHelper';

import audioFile from '/audio/loop.mp3';
import logo from '/img/logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const { isScrollingUp, isAtTop } = useScrollDirection();
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
      className={cn(
        isAtTop ? 'bg-none' : isScrollingUp && 'bg-black',
        'fixed z-50 h-16 w-full rounded-md border-none transition-all duration-700'
      )}
    >
      <header className="absolute -top-4 w-full">
        <nav className="flex size-full items-center justify-between p-4">
          <img src={logo} alt="logo" className="h-16 w-16" />

          <div>
            {navLinks.map((item: TNavLink) => (
              <a
                href={`#${item.name.toLowerCase()}`}
                key={item.id}
                className="nav-hover-btn"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="ml-10 flex items-center gap-1"
            onClick={toggleAudio}
          >
            <audio ref={audioRef} src={audioFile} loop className="hidden" />
            {audioBarsData.map((item) => (
              <div
                key={item.id}
                style={{ animationDelay: `${item.delay}ms` }}
                className={cn(
                  isPlay && 'animate-bounce',
                  `indicator-line delay-${item.delay}`
                )}
              />
            ))}
          </button>
        </nav>
      </header>
    </div>
  );
}
