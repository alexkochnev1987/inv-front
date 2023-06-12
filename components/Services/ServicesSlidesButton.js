import Link from "next/link";

export default function ServicesSlidesButton({
  text,
  link,
  variant = "white",
  children,
}) {
  return (
    <Link href={link} className="flex items-center mt-7">
      <span className={`text-${variant} mr-5 text-sm`}>{text}</span>
      {children}
    </Link>
  );
}