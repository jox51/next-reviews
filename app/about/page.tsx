import type { Metadata } from "next"
import Heading from "@/components/Heading"

export const metadata: Metadata = {
  title: "About"
}
export default function AboutPage() {
  return (
    <>
      <Heading>About Page</Heading>
      <p>About Page</p>{" "}
    </>
  )
}
