import axios from 'axios';

async function FetchProductDetails(keyword: string, source: string) {
  try {
    const url = source === 'amazon'
      ? `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`
      : `https://www.flipkart.com/search?q=${encodeURIComponent(keyword)}`;

    const response = await axios.get(url);
    const data = response.data;

    // Extract the required details from the HTML response
    const priceRegex = /<span class="a-offscreen">([^<]*)<\/span>/g;
    const sellerRegex = /<span class="a-size-small">Sold by <span class="a-color-secondary">(.*?)<\/span>/g;
    const productRegex = /<span class="a-size-medium a-color-base a-text-normal">(.*?)<\/span>/g;

    const prices: string[] = [];
    const sellers: string[] = [];
    const products: string[] = [];

    let match;
    while ((match = priceRegex.exec(data)) !== null) {
      prices.push(match[1]);
    }

    while ((match = sellerRegex.exec(data)) !== null) {
      sellers.push(match[1]);
    }

    while ((match = productRegex.exec(data)) !== null) {
      products.push(match[1]);
    }

    // Display the fetched details
    for (let i = 0; i < prices.length; i++) {
      console.log('Price:', prices[i]);
      console.log('Seller:', sellers[i]);
      console.log('Product:', products[i]);
      console.log('---');
    }
  } catch (error) {
    console.error('Error fetching product details:');
  }
}

// Usage example
FetchProductDetails('macbook air m1', 'amazon');
