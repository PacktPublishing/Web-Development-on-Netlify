import client from '../../sanityClient'
import { groq } from 'next-sanity'

async function getPosts() {
    const posts = await client.fetch(groq`
      *[_type == "post"]
    `)
    return {
        props: {
            posts,
        },
    }
}
export default async function Home() {
    const posts = await getPosts()
    return (
        <div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    );
}
