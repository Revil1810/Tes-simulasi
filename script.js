document.getElementById("clickMe").addEventListener("click", function() {
    alert("Hello! You clicked the button.");
});

// Data Dummy untuk Grafik
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Harga Token',
        data: [10, 20, 15, 25, 30],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
    }]
};

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
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();

        const labels = Object.keys(data);
        const prices = labels.map(token => data[token].usd);

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

fetchTokenPrices();


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan data pengguna
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Login Successful');
});
