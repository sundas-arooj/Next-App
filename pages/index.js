import Link from "next/link";
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <div >
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <h1>Hello!</h1>
    </div>
  )
}
