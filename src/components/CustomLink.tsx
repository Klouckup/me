import Link from 'next/link';

export default function CustomLink({
  as,
  href,
  ...otherProps
}: {
  as: string;
  href: string;
}) {
  return (
    <>
      <Link as={as} href={href} {...otherProps}></Link>
    </>
  );
}
