import { getAuthors } from "@/lib/reviews";
import Heading from "@/src/components/Heading";
import '@/public/styles/authors.scss';
import AnimatedElement from "@/src/components/AnimatedElement";
import Link from "next/link";

export default async function Authors() {
    const authors = await getAuthors();
    return (
        <>
            <div className="authors-page">
                <Heading>Authors</Heading>

                <div className="authors-row">
                    {authors.map((author) => (
                        <AnimatedElement>
                            <Link className="flex flex-col items-center border rounded bg-slate-200 hover:shadow-lg" href={`/authors/${author.slug}`} key={author.slug}>
                                <img src={author.photo}></img>
                                <span>{author.name}</span>
                            </Link>
                        </AnimatedElement>
                    ))}
                </div>

            </div>
        </>
    );
}