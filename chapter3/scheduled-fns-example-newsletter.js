import { scheduled } from '@netlify/functions';
import { fetch } from 'node-fetch';

async function handler() {
    // Fetch the latest blog posts
    const response = await fetch(`https://mysite.com/api/blog-posts`);
    const blogPosts = await response.json();

    // Send an email to subscribers
    for (const blogPost of blogPosts) {
        const email = `
      <h1>Latest blog post: ${blogPost.title}</h1>
      <p>${blogPost.summary}</p>
      <p>${blogPost.URL}</p>`;
        await sendEmail(email, blogPost.subscribers);
    }
}

export default scheduled(handler, {
    schedule: '0 0 * * *', // Every day at midnight
});
