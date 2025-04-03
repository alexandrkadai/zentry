type Link = {
  href: string;
  icon: React.ReactNode;
};
type FotterProps = {
  link: Link;
  index: number;
};

export default function FooterLinks({ link, index }: FotterProps) {
  return (
    <a
      key={index}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black transition-colors duration-500 ease-in-out hover:text-white"
    >
      {link.icon}
    </a>
  );
}
