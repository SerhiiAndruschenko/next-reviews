import Heading from "@/src/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/src/components/ShareLinkButton";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);

  return (
    <>
      <div className="article-head flex flex-col gap-x-9 justify-between items-center mb-9 sm:flex-row">
        <img src={review.image} className="mb-4 rounded w-full sm:w-4/12" />
        <div className="w-full sm:w-8/12">
          <Link
            className="font-gentium"
            href={`/authors/${review.author.slug}`}
          >
            {review.author.name}
          </Link>
          <Heading>{review.title}</Heading>
          <p className="italic font-gentium pb-3">{review.date}</p>
          <ShareLinkButton />
        </div>
      </div>

      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="w-full font-gentium prose prose-slate max-w-none"
      />
    </>
  );
}
