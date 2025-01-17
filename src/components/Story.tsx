import AnimatedTitle from "./ui/AnimatedTitle";

export default function Story() {
  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
    <div className="flex size-full flex-col items-center py-10 pb-24">
      <p className="font-general text-sm uppercase md:text-[16px] tracking-wider">
        the multiversal ip world
      </p>

      <div className="relative size-full">
        <AnimatedTitle
          title="the story of a hidden realm"
          className="mt-5 pointer-events-none mix-blend-difference relative z-10 text-balance"
        />
        </div>
        </div>
        </div>
  )
}
