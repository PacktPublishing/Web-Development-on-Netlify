import axios from 'axios'
import cheerio from 'cheerio'

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const text = $("body").text();
    // Do something with the scraped text
    console.log(text);
    console.log(`Website ${url} scraped successfully`);
  } catch (error) {
    console.error(`Error scraping website ${url}: ${error}`);
  }
}

export default async function () {
  const websites = [
    "https://kenny.engineer",
    "https://www.jaykay.design"
  ];
  const promises = websites.map(website => scrapeWebsite(website));
  try {
    await Promise.all(promises);
    console.log("All websites scraped successfully");
    return new Response("All websites scraped successfully", { status: 200 });
  } catch (error) {
    console.error("Error scraping websites:", error);
    return new Response("Error scraping websites", { status: 500 });
  }
};
