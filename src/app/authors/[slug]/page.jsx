import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getAuthorReviews, getAuthorNameBySlug } from "@/lib/reviews";


export async function generateMetadata({ params: { slug } }) {
  const authorName = await getAuthorNameBySlug(slug);
  return {
    title: authorName,
  }
}

export default async function AuthorPage({ params: { slug } }) {
  const reviews = await getAuthorReviews(slug);
  const authorName = await getAuthorNameBySlug(slug);
  return (
    <>
      <Heading>{authorName}</Heading>
      <ul className="flex flex-col gap-4">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="post-card border rounded bg-slate-200 hover:shadow-lg"
          >
            <Link
              className="flex flex-col items-center sm:flex-row"
              href={`/reviews/${review.slug}`}
            >
              <img src={review.image} className="rounded-t w-full sm:w-96" />
              <div className="post-card__content">
                <p className="font-gentium text-left mb-2">{review.author.name}</p>

                <h2 className="font-gentium text-left">
                  {review.title}
                </h2>
                <span className="font-gentium text-left" dangerouslySetInnerHTML={{ __html: review.excerpt }} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
