import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getReviews } from "@/lib/reviews";

/*export const metadata = {
  title: "Reviews",
};*/

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
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
                <p className="font-gentium text-left mb-2">{review.author}</p>

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
