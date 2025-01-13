import { cn } from "@/src/utils/helper";

type ButtonProps = {
    id: string;
    title: string;
    className: string;
}

export default function Button({id, title, className} : ButtonProps) {
  return (
    <button className={cn( 'rounded-full uppercase font-bold p-2 items-center justify-center', className)} id={id}>{title}</button>
  )
}
