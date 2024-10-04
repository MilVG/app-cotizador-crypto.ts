import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}
export default function ErrorMessage({ children }: ErrorProps) {
  return (
    <div>{children}</div>
  )
}

