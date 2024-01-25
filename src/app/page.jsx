import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getPagedReviews, getPageCount } from "@/lib/reviews";
import AnimatedElement from "@/src/components/AnimatedElement";
import Image from "next/image";
/*export const metadata = {
  title: "Reviews",
};*/

function parsePageParams(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}

export default async function ReviewsPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const reviews = await getPagedReviews(page, 5);
  const pageCount = await getPageCount();
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
                <img
                  width={384}
                  height={248}
                  alt={review.title}
                  src={review.image}
                  className="rounded-t w-full sm:w-96"
                />
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

      <div className="pagination">
        {page >= 2 && (
          <Link className="arrow" href={`/?page=${page - 1}`}>
            &laquo;
          </Link>
        )}
        {Array.from({ length: pageCount }, (_, index) => (
          <Link
            className={index + 1 == page ? "active" : ""}
            key={index + 1}
            href={`/?page=${index + 1}`}
          >
            {index + 1}
          </Link>
        ))}
        {page !== pageCount && (
          <Link className="arrow" href={`/?page=${page + 1}`}>
            &raquo;
          </Link>
        )}
      </div>
    </>
  );
}
