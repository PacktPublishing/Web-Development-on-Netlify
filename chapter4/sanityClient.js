import { createClient } from 'next-sanity'
export default createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "DEFAULT_SANITY_PROJECT_ID",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-02-29",
    useCdn: true,
});
