type CardProps = {
  src: string;
  title: string;
  description: string;
};

export default function Card({src, title, description}:CardProps) {
  return <div className="relative size-full rounded-md">
    <video src={src} loop muted autoPlay className="absolute p-5  top-0 left-0 size-full object-cover object-center"></video>
    {title}
  </div>;
}
