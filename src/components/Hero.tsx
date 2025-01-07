import { useRef, useState } from 'react';
import Button from './ui/Button';
// import { MousePointer2 } from 'lucide';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const [current, setCurrent] = useState(1);
  const [play, setPlay] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loadedVid, setLoadedVid] = useState(0);

  const nexVidRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      setCurrent((prevIndex) => (prevIndex % 4) + 1);
    }, 1000);
  };

  const handleVideoLoad = () => {
    setLoadedVid((prevIndex) => (prevIndex % 4) + 1);
  };


  useGSAP(() => {
    if (clicked) {
      gsap.set('#next-video', { visibility: 'visible' });

      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        // onStart: () => nexVidRef.current.play(),
      });

      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease:"power1.inOut",

      });
    }
  });

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
              ref={nexVidRef}
              src={getVideoSrc((current % 4) + 1)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
        <video
          ref={nexVidRef}
          src={getVideoSrc(current + 1)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <video
          src={getVideoSrc(current)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
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
