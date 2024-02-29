import { builder } from "@netlify/functions";

const myHandler = async (event, context) => {
    const segments = event.path.split('/');
    const name = segments[segments.length - 1];
    const greeting = name ? `Hello ${name}` : 'Hello World';

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html",
        },
        body: `
      <!DOCTYPE html>
      <html>
        <body>
          <h1>${greeting}</h1>
        </body>
    </html>
    `,
    };
};
const handler = builder(myHandler);

export { handler };
