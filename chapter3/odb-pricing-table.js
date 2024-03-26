import { builder } from '@netlify/functions';
import { fetch } from 'node-fetch';
async function handler(event, context) {
    // Get the product ID from URL path
    const segments = event.path.split('/');
    const productId = segments[segments.length - 1];
    // Fetch the product price from the API 
    const response = await fetch(`https://api.example.com/products/${productId}`);
    const price = await response.json();
    // Generate the pricing table 
    const table = `
            <table> 
            <thead> 
            <tr> 
            <th>Quantity</th> 
            <th>Price</th> 
            </tr> 
            </thead> 
            <tbody> 
            <tr> 
            <td>1</td> 
            <td>${price.price}</td> 
            </tr> 
            <tr> 
            <td>2</td> 
            <td>${price.price * 2}</td> 
            </tr> 
            <tr> 
            <td>3</td> 
            <td>${price.price * 3}</td> 
            </tr> 
            </tbody> 
            </table>`;
    // Return the pricing table 
    return {
        statusCode: 200,
        body: table,
    };
}
export default builder(handler)
