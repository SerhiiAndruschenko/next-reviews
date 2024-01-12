import { getFeaturedReview } from "@/lib/reviews";
import Heading from "@/src/components/Heading";
import Link from "next/link";


export default async function Home() {
  const featuredReview = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <div className="post-card border rounded hover:shadow-lg bg-slate-200">
        <Link
          className="flex flex-col items-center sm:flex-row"
          href={`/reviews/${featuredReview.slug}`}
        >
          <img
            src={featuredReview.image}
            className="rounded-t w-full sm:w-96"
          />
          <div className="post-card__content">
            <h2 className="font-semibold font-orbitron text-left">
              {featuredReview.title}
            </h2>
            <p className="font-exo2 text-left">
              {featuredReview.excerpt}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
