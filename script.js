// Menghandle klik button (bila ada)
document.getElementById("clickMe")?.addEventListener("click", function() {
    alert("Hello! You clicked the button.");
});

// Data Dummy untuk Grafik
const bitcoinData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Harga Bitcoin',
        data: [10000, 12000, 11500, 13000, 14000],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
    }]
};

const ethereumData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Harga Ethereum',
        data: [2000, 2500, 2300, 2700, 3000],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false
    }]
};

// Membuat Grafik
const bitcoinChart = new Chart(
    document.getElementById('bitcoinChart'),
    {
        type: 'line',
        data: bitcoinData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
);

const ethereumChart = new Chart(
    document.getElementById('ethereumChart'),
    {
        type: 'line',
        data: ethereumData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
);

// Tambahkan untuk USDT, BNB, dan Solana seperti di atas

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan data pengguna
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Login Successful');
});
