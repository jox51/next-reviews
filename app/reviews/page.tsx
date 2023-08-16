import Link from "next/link"
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/review"

export default async function ReviewsPage() {
  const reviewsFunc = await getReviews()
  return (
    <>
      <Heading>Reviews Page</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviewsFunc.map((review, index) => {
          const { slug, title, date, image } = review
          return (
            <li
              key={index}
              className="bg-white w-80 rounded shadow hover:shadow-xl"
            >
              <Link
                href={`/reviews/${slug}`}
                className="text-orange-800 hover:underline"
              >
                <img
                  src={image}
                  alt="Stardew Valley"
                  width="400"
                  height="180"
                  className="rounded-t"
                />
                <h2 className="py-1 text-center font-orbitron">{title}</h2>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
