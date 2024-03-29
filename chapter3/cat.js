import fetch from 'node-fetch';

const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

exports.handler = async (event, context) => {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
    }
};
