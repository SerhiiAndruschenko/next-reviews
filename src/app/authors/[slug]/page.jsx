import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getAuthorReviews, getAuthorNameBySlug } from "@/lib/reviews";
import AnimatedElement from "@/src/components/AnimatedElement";
import Image from "next/image";

export async function generateMetadata({ params: { slug } }) {
  const authorName = await getAuthorNameBySlug(slug);
  return {
    title: authorName,
  };
}

export default async function AuthorPage({ params: { slug } }) {
  const reviews = await getAuthorReviews(slug);
  const authorName = await getAuthorNameBySlug(slug);
  return (
    <>
      <Heading>{authorName}</Heading>
      <ul className="flex flex-col gap-4">
        {reviews.map((review) => (
          <li key={review.slug}>
            <AnimatedElement >
              <Link
                className="flex flex-col items-center sm:flex-row post-card border rounded bg-slate-200 hover:shadow-lg"
                href={`/reviews/${review.slug}`}
              >
                <Image width={384} height={248} alt={review.title} src={review.image} className="rounded-t w-full sm:w-96" />
                <div className="post-card__content">
                  <p className="font-gentium text-left mb-2">
                    {review.author.name}
                  </p>

                  <h2 className="font-gentium text-left">{review.title}</h2>
                  <span
                    className="font-gentium text-left"
                    dangerouslySetInnerHTML={{ __html: review.excerpt }}
                  />
                </div>
              </Link>
            </AnimatedElement>
          </li>
        ))}
      </ul>
    </>
  );
}
