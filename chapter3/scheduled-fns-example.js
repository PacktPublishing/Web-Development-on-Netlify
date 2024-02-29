import { scheduled } from '@netlify/functions';

async function handler() {
    // Do something
}
export default scheduled(handler, {
    schedule: '0 0 * * *', // Every day at midnight 
});
