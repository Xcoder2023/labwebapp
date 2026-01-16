import Link from "next/link";

export function Button({ label, href }: { label: string; href?: string }) {
  const classes =
    "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return <button className={classes}>{label}</button>;
}
