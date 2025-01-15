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
        className="absolute left-0 top-0 size-full object-cover object-center p-5"
      ></video>
      {title}
      {description}
    </div>
  );
}
