import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>/hoge/baz page</p>
      <p><Link href={`/bar`}>/bar</Link></p>
    </div>
  )
}
