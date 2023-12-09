import Link from "next/link"

const RootPage = () => {
  return (
    <div>
      <Link href={'/signin'}>
        Signin
      </Link>
    </div>
  )
}

export default RootPage