/*import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";



export async function getFeaturedReview() {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReview(slug) {
   const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
   const { content, data: { title, date, image, excerpt, author } } = matter(text);
   const body = marked(content);
   return {slug, title, date, image, excerpt, author, body}
}

export async function getReviews() {
    const slugs = await getSlugs();
    const reviews = [];
    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }
    reviews.sort((a,b) => b.date.localeCompare(a.date));
    return reviews;
}

export async function getSlugs() {
    const files = await readdir('./content/reviews');
    return files.filter((file) => file.endsWith('.md'))
        .map((file) => file.slice(0, -'.md'.length));
}
*/

export const CACHE_TAG_REVIEWS = 'reviews';

const WORDPRESS_API_URL = "https://bookwarm-cms.testapp.fun/wp-json/custom/v1";

export async function getSlugs() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Unable to fetch slugs from WordPress API");
    }

    return data.map(post => post.slug);
}

export async function getReview(slug) {
    const reviews = await getReviews();
    const review = reviews.find((review) => review.slug === slug);
    return review;
}

export async function getReviews() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();
    
    const reviews = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return reviews;
}

export async function getPageCount() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();
    const reviews = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const pageCount = Math.ceil(reviews.length / 5);
    return pageCount; 
}

export async function getPagedReviews(page = 1, perPage = 5) {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?page=${page}&per_page=${perPage}`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();
    
    const reviews = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return reviews;
}

export async function getAuthorReviews(slug) {
    const reviews = await getReviews();
    
    const authorReviews = reviews.filter(review => review.author.slug === slug);
    const sortedReviews = authorReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedReviews;
} 
 
export async function getAuthorBySlug(slug) {
    const authors = await getAuthors();
    const author = authors.find(author => author.slug === slug);
    console.log(author);
    return author ? author : null;
}

export async function getAuthors() {
    const response = await fetch(`${WORDPRESS_API_URL}/tags`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();
    
    const authors = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return authors;
}