function updateCharts() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            // Update existing charts with new data
            bitcoinChart.data.datasets[0].data = [data.bitcoin.usd];
            bitcoinChart.update();

            ethereumChart.data.datasets[0].data = [data.ethereum.usd];
            ethereumChart.update();

            usdtChart.data.datasets[0].data = [data.tether.usd];
            usdtChart.update();

            bnbChart.data.datasets[0].data = [data.binancecoin.usd];
            bnbChart.update();

            solanaChart.data.datasets[0].data = [data.solana.usd];
            solanaChart.update();
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Update every 10 seconds
setInterval(updateCharts, 10000);
