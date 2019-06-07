import Link from "next/link"

export default function Stp() {
  return (
    <div>
      <p align="center">This is my Setup page</p>
      <Link title="Go Back" href="/">
        <p align="center">
          <a title="Go Back">Go Back</a>
        </p>
      </Link>
    </div>
  )
}
