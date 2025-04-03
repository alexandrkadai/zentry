import { cn } from '@/src/utils/helper';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TitleProps = {
  title: string;
  className: string;
};

export default function AnimatedTitle({ title, className }: TitleProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.context(() => {
        const titleAnim = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: '100 bottom',
            end: 'center bottom',
            toggleActions: 'play none none reverse',
          },
        });

        titleAnim.to('.animated-word', {
          opacity: 1,
          transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
          ease: 'power2.inOut',
          stagger: 0.02,
        });
      }, containerRef);
    },
    { dependencies: [containerRef.current], revertOnUpdate: true }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'mt-5 p-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]',
        className
      )}
    >
      <p className="animated-word uppercase">{title}</p>
    </div>
  );
}
