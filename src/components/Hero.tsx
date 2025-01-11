import { useRef, useState } from 'react';
import Button from './ui/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const [current, setCurrent] = useState(1);

  const nexVidRef = useRef<HTMLVideoElement>(null);

  const triggerGSAPAnimation = () => {
    gsap.set('#next-video', { visibility: 'visible' });
    gsap.to('#next-video', {
      transformOrigin: 'center center',
      scale: 1,
      width: '100vw',
      height: '100vh',
      duration: 1,
      ease: 'power1.inOut',
    });

    gsap.from('#current-video', {
      transformOrigin: 'center center',
      scale: 0,
      duration: 1.5,
      ease: 'power1.inOut',
    });

    gsap.set('#next-video', { visibility: 'invisible' });
  };

  useGSAP(
    () => {
      triggerGSAPAnimation();
    },
    { dependencies: [current], revertOnUpdate: true }
  );

  const handleVideoClick = () => {
  
      setCurrent((current) =>( current % 4) + 1);
    
    console.log(current);
  };

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleVideoClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
          >
            <video
              src={getVideoSrc(current === 4 ? 1 : current + 1)}
              loop
              muted
              id="current-video"
              className="z-50 size-64 origin-center scale-150 object-cover object-center"
            />
          </div>
        </div>

        <video
          ref={nexVidRef}
          src={getVideoSrc(current)}
          loop
          muted
          autoPlay
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />

        <video
          src={getVideoSrc(current)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 z-10 size-full object-cover object-center"
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Gaming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefine
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular capitalize text-blue-100">
              Enter the metagame layer <br />
              unleash the paly Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              className="flex items-center justify-center gap-1 bg-yellow-300 p-2 font-bold"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Gaming
      </h1>
    </div>
  );
};

export default Hero;
