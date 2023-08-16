import type { Metadata } from "next"
import Heading from "@/components/Heading"
import { getReview, getSlugs } from "@/lib/review"
import ShareLinkButton from "@/components/ShareLinkButton"

// generates static pages at build time, makes faster if not fetching from API

interface ReviewPageParams {
  slug: string
}

interface ReviewPageProps {
  params: ReviewPageParams
}

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params: { slug }
}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug)
  return {
    title: review.title
  }
}

export default async function ReviewPage({
  params: { slug }
}: ReviewPageProps) {
  const review = await getReview(slug)
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="pb-2 italic">{review.date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={review.image}
        alt="Hollow Knight"
        width="640"
        height="360"
        className="rounded-lg mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className=" max-w-screen-sm prose prose-slate"
      />
    </>
  )
}
