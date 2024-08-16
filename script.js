const fetchAndUpdateChart = (chartId, token) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: `${token} Price (USD)`,
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute'
                    }
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    const updateChart = (price) => {
        chart.data.labels.push(new Date());
        chart.data.datasets[0].data.push(price);
        chart.update();
    };

    setInterval(() => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`)
            .then(response => response.json())
            .then(data => {
                const price = data[token]?.usd;
                if (price !== undefined) {
                    updateChart(price);
                }
            });
    }, 60000);
};

// Call the function for each token
fetchAndUpdateChart('bitcoinChart', 'bitcoin');
fetchAndUpdateChart('ethereumChart', 'ethereum');
fetchAndUpdateChart('tetherChart', 'tether');  // USDT
fetchAndUpdateChart('binancecoinChart', 'binancecoin');  // BNB
fetchAndUpdateChart('solanaChart', 'solana');  // Solana

// Note: IDR (Indonesian Rupiah) may not be available on CoinGecko API in this form
// Use a different API if necessary for IDR or simulate it with other means
