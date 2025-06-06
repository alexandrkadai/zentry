import { useRef } from 'react';
import AnimatedTitle from './ui/AnimatedTitle';
import entrence from '/img/entrance.webp';
import gsap from 'gsap';
import Button from './ui/Button';

export default function Story() {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = imageRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    const element = imageRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: 'power1.inOut',
      });
    }
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase tracking-wider md:text-[16px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the story of a hidden realm"
            className="pointer-events-none relative z-10 mt-5 text-balance mix-blend-difference"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={imageRef}
                  src={entrence}
                  alt="image of entrence"
                  className="object-contain"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                />
              </div>
            </div>
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-balance text-center font-circular-web text-violet-50 md:text-start">
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>

              <Button
                id="realm-btn"
                title="discover prologue"
                className="mt-5 cursor-pointer bg-yellow-300 text-black hover:bg-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
