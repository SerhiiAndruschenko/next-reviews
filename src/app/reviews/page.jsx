import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getReviews } from "@/lib/reviews";
import AnimatedElement from "@/src/components/AnimatedElement";
import Image from "next/image";

// export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
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
                  <p className="font-gentium text-left mb-2">
                    {review.author.name}
                  </p>

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
