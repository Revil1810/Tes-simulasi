const ctxBitcoin = document.getElementById('bitcoinChart').getContext('2d');
const bitcoinChart = new Chart(ctxBitcoin, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Bitcoin Price (USD)',
            data: [40000, 45000, 42000, 48000, 47000, 46000, 49000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: false
            }
        }
    }
});
