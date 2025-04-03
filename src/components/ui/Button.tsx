import { cn } from '@/src/utils/helper';

type ButtonProps = {
  id: string;
  title: string;
  className: string;
};

export default function Button({ id, title, className }: ButtonProps) {
  return (
    <button
      className={cn(
        'items-center justify-center rounded-full p-2 font-bold uppercase',
        className
      )}
      id={id}
    >
      {title}
    </button>
  );
}
