document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan data pengguna
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Login Successful');
});

document.getElementById("registerBtn").addEventListener("click", function() {
    window.location.href = 'register.html'; // Arahkan ke halaman pendaftaran
});
