import Link from "next/link"

export const RootPage = () => {
  return (
    <div>
      <Link href={'/auth'}>
        Signin
      </Link>
    </div>
  )
}