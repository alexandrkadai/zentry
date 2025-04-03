type ImageBoxProps = {
  src: string;
  clipClass: string;
};

export default function ImageBox({ src, clipClass }: ImageBoxProps) {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
}
