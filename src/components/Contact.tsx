import AnimatedTitle from './ui/AnimatedTitle';
import Button from './ui/Button';
import ImageBox from './ui/ImageBox';


export default function Contact() {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen  px-10">
          <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
              <ImageBox
                src="/img/contact-1.webp"
                clipClass="contact-clip-path-1"
              />
              <ImageBox
                src="/img/contact-2.webp"
                clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
              />
            </div>
    
            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
              <ImageBox
                src="/img/swordman-partial.webp"
                clipClass="absolute md:scale-125"
              />
              <ImageBox
                src="/img/swordman.webp"
                clipClass="sword-man-clip-path md:scale-125"
              />
            </div>
    
            <div className="flex flex-col items-center text-center">
              <p className="mb-10 font-general text-[10px] uppercase">
                Join Zentry
              </p>
    
              <AnimatedTitle
                title="let&#39;s build the new era of gaming together."
                className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] tracking-widest md:w-[350px]"
              />
    
              <Button id="someid" title="contact us" className="mt-10 cursor-pointer bg-yellow-300 text-black" />
            </div>
          </div>
        </div>
      );
    };