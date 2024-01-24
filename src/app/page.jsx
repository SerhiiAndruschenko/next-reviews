import Link from "next/link";
import Heading from "@/src/components/Heading";
import { getPagedReviews, getPageCount } from "@/lib/reviews";

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
      <div className="pagination flex gap-2 align-middle mt-3 mb-3">
        {page >= 2 && <Link href={`/?page=${page - 1}`}>&lt;</Link>}

        <span>Page {page}</span>
        {page !== pageCount && (
          <Link href={`/?page=${page + 1}`}>
            &gt;
          </Link>
        )}
      </div>
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
          </li>
        ))}
      </ul>
    </>
  );
}
