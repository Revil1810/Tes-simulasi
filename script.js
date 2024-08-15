document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Token Price',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    async function fetchTokenPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
            const data = await response.json();
            const labels = Object.keys(data);
            const prices = labels.map(token => data[token].usd);

            priceChart.data.labels = labels;
            priceChart.data.datasets[0].data = prices;
            priceChart.update();
        } catch (error) {
            console.error('Error fetching token prices:', error);
        }
    }

    fetchTokenPrices();
    setInterval(fetchTokenPrices, 10000); // Update every 10 seconds
});
