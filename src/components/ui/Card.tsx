type CardProps = {
  src: string;
  title: string;
  description: string;
};

export default function Card({ src, title, description }: CardProps) {
  return (
    <div className="relative size-full rounded-md">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex flex-col justify-between px-3 py-5 text-blue-50">
        <h1 className="bento-title special-font">{title}</h1>

        <p className="mt-3 max-w-64 text-balance text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
