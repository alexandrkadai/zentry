import Card from './ui/Card';
import CardWrap from './ui/CardWrap'; 

export default function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto md:px-10">
        <div className="px-3 py-32">
          <h2 className="font-circular-web text-2xl text-blue-50">
            Into the metagame layer
          </h2>
          <p className="mt-2 max-w-md text-balance font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Card
            src="videos/feature-1.mp4"
            title="radiant"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-4 gap-7">
          <CardWrap id='vault' className="bento-tilt_1 row-span-1 md:col-span-2 md:row-span-2">
            <Card
              src="videos/feature-2.mp4"
              title="zigma"
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </CardWrap>

          <CardWrap id="nexus" className="bento-tilt_1 row-span-2 md:col-span-1 ">
            <Card
              src="videos/feature-3.mp4"
              title="nexus"
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </CardWrap>

          <CardWrap id="prologue" className="bento-tilt_1 row-span-2 md:col-span-1 ">
            <Card
              src="videos/feature-4.mp4"
              title="azbul"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </CardWrap>

          <CardWrap id="soon" className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 hover:bg-violet-700">
              <h2 className="text-center text-[36px] md:text-[64px] font-bold uppercase text-white">
                More comming soon
              </h2>
            </div>
          </CardWrap>

          <CardWrap id="last" className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
          </CardWrap>
        </div>
      </div>
    </section>
  );
}
