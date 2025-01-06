type ButtonProps = {
    id: string;
    title: string;
    className: string;
}

export default function Button({id, title, className} : ButtonProps) {
  return (
    <button className={className} id={id}>{title}</button>
  )
}
