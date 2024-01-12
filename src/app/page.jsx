import { getFeaturedReview } from "@/lib/reviews";
import Heading from "@/src/components/Heading";
import Link from "next/link";


export default async function Home() {
  const featuredReview = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <div className="border rounded hover:shadow-lg bg-slate-200">
        <Link
          className="flex flex-col items-center sm:flex-row"
          href={`/reviews/${featuredReview.slug}`}
        >
          <img
            src={featuredReview.image}
            className="rounded-t w-full sm:w-96"
          />
          <div className="py-2 px-4">
            <h2 className="font-semibold font-orbitron text-center sm:text-left">
              {featuredReview.title}
            </h2>
            <p className="font-exo2 text-center sm:text-left">
              {featuredReview.excerpt}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
