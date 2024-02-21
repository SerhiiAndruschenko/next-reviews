import Heading from "@/src/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/src/components/ShareLinkButton";
import Link from "next/link";
import AnimatedElement from "@/src/components/AnimatedElement";

// export const dynamic = 'force-dynamic';

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
  const originalDate = new Date(review.date);
  const formattedDate = originalDate.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <>
      <div className="article-head flex flex-col gap-x-9 justify-between items-center mb-9 sm:flex-row">
        <div className="mb-4 rounded w-full sm:w-4/12">
          <AnimatedElement>
            <img
              width={484}
              height={312}
              alt={review.title}
              src={review.image}
            />
          </AnimatedElement>
        </div>
        <div className="w-full sm:w-8/12">
          <AnimatedElement>
            <Link
              className="font-gentium"
              href={`/authors/${review.author.slug}`}
            >
              {review.author.name}
            </Link>
          </AnimatedElement>

          <Heading>{review.title}</Heading>
          <AnimatedElement>
            <ShareLinkButton />
          </AnimatedElement>
        </div>
      </div>

      <AnimatedElement>
        <article
          dangerouslySetInnerHTML={{ __html: review.body }}
          className="w-full font-gentium prose prose-slate max-w-none"
        />
      </AnimatedElement>
    </>
  );
}
