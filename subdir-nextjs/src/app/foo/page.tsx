import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>/foo page</p>
      <p><Link href={`/foo/foo`}>/foo/foo</Link></p>
    </div>
  )
}
