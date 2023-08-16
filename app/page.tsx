import Heading from "@/components/Heading"
import Link from "next/link"
import { getReviews, Review } from "@/lib/review"

export default async function HomePage() {
  const reviews = await getReviews()

  const sortedReviews = reviews.sort(
    (a: Review, b: Review) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const featuredReview = sortedReviews[0]

  return (
    <>
      <Heading>{featuredReview.title}</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>{" "}
      <div className="bg-white rounded shadow hover:shadow-xl w-full">
        <Link
          href={`/reviews/${featuredReview.slug}`}
          className="flex flex-col sm:flex-row text-orange-800 hover:underline"
        >
          <img
            src={featuredReview.image}
            alt={featuredReview.title}
            width="400"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-orbitron sm:px-2">
            {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  )
}
