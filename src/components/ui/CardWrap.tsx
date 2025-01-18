import { useRef, useState } from 'react';

type CardWrapType = {
  children: React.ReactNode;
  className: string;
  id: string;
};

export default function CardWrap({ children, className,id }: CardWrapType) {
  const [transform, setTransform] = useState('');
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e:React.MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;

    setTransform(newTransform);
  };
  const handleMouseLeave = () => {};

  return (
    <div
    id={id}
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transform }}
    >
      {children}
    </div>
  );
}
