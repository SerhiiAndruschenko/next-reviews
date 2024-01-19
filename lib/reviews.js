import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";


/*
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

const WORDPRESS_API_URL = "http://bookwarm-cms.testapp.fun/wp-json/wp/v2";

export async function getSlugs() {
    const response = await fetch("http://bookwarm-cms.testapp.fun/wp-json/wp/v2/posts");
    const data = await response.json();
    //console.log(data); 

    if (!Array.isArray(data)) {
        throw new Error("Unable to fetch slugs from WordPress API");
    }

    return data.map(post => post.slug);
}

export async function getReview(slug) {
    // Fetch post data
    const response = await fetch(`http://bookwarm-cms.testapp.fun/wp-json/wp/v2/posts?slug=${slug}`);
    const data = await response.json();

    if (data.length === 0) {
        throw new Error(`Review with slug '${slug}' not found`);
    }

    // Extract necessary information
    const { title, date, content, excerpt, author, featured_media, tags } = data[0];

    // Fetch image URL
    const imageUrlResponse = await fetch(`${WORDPRESS_API_URL}/media/${featured_media}`);
    const imageData = await imageUrlResponse.json();
    const image = imageData.source_url;

    const tagNames = await Promise.all(tags.map(async tagId => {
        const tagResponse = await fetch(`${WORDPRESS_API_URL}/tags/${tagId}`);
        const tagData = await tagResponse.json();
        return tagData.name;
    }));
    // Process content (assuming marked is a function from a markdown library)
    const body = marked(content.rendered);

    return {
        slug,
        title: title.rendered,
        date,
        excerpt: excerpt.rendered,
        author: tagNames,
        body,
        image,
    };
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