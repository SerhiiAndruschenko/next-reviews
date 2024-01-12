import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: 'Reviews',
}

export default async function ReviewsPage() {

  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-4">

        {reviews.map((review) => (
          <li key={review.slug} className="border rounded bg-slate-200 hover:shadow-lg">
            <Link
              className="flex flex-col items-center sm:flex-row"
              href={`/reviews/${review.slug}`}
            >
              <img
                src={review.image}
                className="rounded-t w-full sm:w-96"
              />
              <div className="py-2 px-4">
                <h2 className="font-semibold font-orbitron text-center sm:text-left">
                  {review.title}
                </h2>
                <p className="font-exo2 text-center sm:text-left">
                  {review.excerpt}
                </p>
              </div>
            </Link>
          </li>
        ))}

      

      </ul>
    </>
  );
}
