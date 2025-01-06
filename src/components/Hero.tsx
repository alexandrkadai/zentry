import { useRef, useState } from 'react';

const Hero = () => {
  const [current, setCurrent] = useState(1);
  const [play, setPlay] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loadedVid, setLoadedVid] = useState(0);

  const nexVidRef = useRef(null);

  const handleVideoClick = () => {
    setClicked(true);
    setCurrent((prevIndex) => (prevIndex % 4) + 1);
    console.log(current);
  };

  const handleVideoLoad = () => {
    setLoadedVid(current);
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
          src={getVideoSrc(current % 4)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
