const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const priceChart = new Chart(
    document.getElementById('priceChart'),
    config
);

async function fetchTokenPrices() {
    try {
        const apiKey = '779a6ed1-d86f-4f61-815f-9dd23cd7343b'; // API Key Anda
        const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000', {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey
            }
        });
        const data = await response.json();

        const tokens = ['bitcoin', 'ethereum', 'tether', 'usd-coin', 'binancecoin', 'solana'];
        const labels = tokens;
        const prices = tokens.map(token => {
            const tokenData = data.data.find(item => item.slug === token);
            return tokenData ? tokenData.quote.USD.price : 0;
        });

        const updatedData = {
            labels: labels,
            datasets: [{
                label: 'Harga Token',
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        };

        priceChart.data = updatedData;
        priceChart.update();
    } catch (error) {
        console.error('Error fetching token prices:', error);
    }
}

// Fetch token prices every 10 seconds
setInterval(fetchTokenPrices, 10000); // 10000 milliseconds = 10 seconds

// Call the function once to populate the chart initially
fetchTokenPrices();
