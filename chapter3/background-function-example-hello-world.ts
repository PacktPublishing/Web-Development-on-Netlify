import { Context } from "@netlify/functions";
export default async (req: Request, context: Context) => {
    await downnLoadSeries();
    console.log("Done");
};
async function downnLoadSeries(url: string) {
    // download logic here
}
