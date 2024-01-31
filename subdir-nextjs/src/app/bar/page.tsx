import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>/bar page</p>
      <p><Link href={`/foo`}>/foo</Link></p>
      <p><img src={`/nextjs/next.svg`} width={100} /></p>
    </div>
  )
}
