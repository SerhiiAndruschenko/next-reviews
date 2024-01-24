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

const WORDPRESS_API_URL = "https://bookwarm-cms.testapp.fun/wp-json/custom/v1";

export async function getSlugs() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`);
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
    const response = await fetch(`${WORDPRESS_API_URL}/posts`);
    const data = await response.json();
    
    const reviews = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return reviews;
}

export async function getPageCount() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`);
    const data = await response.json();
    const reviews = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const pageCount = Math.ceil(reviews.length / 5);
    return pageCount; 
}

export async function getPagedReviews(page = 1, perPage = 5) {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?page=${page}&per_page=${perPage}`);
    const data = await response.json();
    
    const reviews = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    //console.log(reviews);
    return reviews;
}

export async function getAuthorReviews(slug) {
    const reviews = await getReviews();
    
    const authorReviews = reviews.filter(review => review.author.slug === slug);
    //console.log(authorReviews);
    const sortedReviews = authorReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedReviews;
} 
 
export async function getAuthorNameBySlug(slug) {
    const reviews = await getReviews();
    const review = reviews.find(review => review.author.slug === slug);
    return review ? review.author.name : null;
}
