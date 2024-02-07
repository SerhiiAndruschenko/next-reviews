import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getAuthorReviews, getAuthorBySlug } from "@/lib/reviews";
import AnimatedElement from "@/src/components/AnimatedElement";
import Image from "next/image";

// export const dynamic = 'force-dynamic';

export async function generateMetadata({ params: { slug } }) {
  const author = await getAuthorBySlug(slug);
  return {
    title: author.name,
  };
}

export default async function AuthorPage({ params: { slug } }) {
  const reviews = await getAuthorReviews(slug);
  const author = await getAuthorBySlug(slug);
  return (
    <>
      <AnimatedElement>
        <div className="author-heading">
          <img src={author.photo}></img>
          <div className="author-info">
            <Heading>{author.name}</Heading>

            <div
              className="font-gentium text-left"
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <h2 className="section-title font-bold text-2xl mb-4 font-gentium">Author's Bookshelf: Reviews</h2>
      </AnimatedElement>

      <ul className="flex flex-col gap-4">
        {reviews.map((review) => (
          <li key={review.slug}>
            <AnimatedElement>
              <Link
                className="flex flex-col items-center sm:flex-row post-card border rounded bg-slate-200 hover:shadow-lg"
                href={`/reviews/${review.slug}`}
              >
                <div className="post-card__image" style={{backgroundImage: `url(${review.image}`}}></div>
                <div className="post-card__content">
                  <h2 className="font-gentium text-left">{review.title}</h2>
                  <div
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
