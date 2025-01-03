const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.amazon.com/dp/B07PGL2ZSL'; // URL do produto

async function scrapeAmazon() {
    try {
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' } // Evitar bloqueio
        });
        const $ = cheerio.load(data);
        const price = $('#priceblock_ourprice').text(); // Selector do preço
        console.log(`Preço: ${price}`);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

scrapeAmazon();
