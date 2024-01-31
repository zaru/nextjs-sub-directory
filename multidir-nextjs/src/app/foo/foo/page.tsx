import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>/foo/foo page</p>
      <p><Link href={`/hoge/baz`}>/hoge/baz</Link></p>
    </div>
  )
}
