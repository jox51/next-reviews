import { readdir, readFile } from "node:fs/promises"
import { marked } from "marked"
import matter from "gray-matter"

export interface Review {
  slug: string
  title: string
  date: string
  image: string
  body: string
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8")
  const {
    content,
    data: { title, date, image }
  } = matter(text)
  const body = marked(content)

  return { slug, title, date, image, body }
}

export async function getReviews(): Promise<Review[]> {
  const files = await readdir("./content/reviews")
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))

  const reviews = []

  for (const slug of slugs) {
    const review = await getReview(slug)
    reviews.push(review)
  }

  return reviews
}

export async function getSlugs(): Promise<String[]> {
  const files = await readdir("./content/reviews")
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
  return slugs
}
