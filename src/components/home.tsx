import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/profile">Go to Profile Page</Link>
    </main>
  )
}
