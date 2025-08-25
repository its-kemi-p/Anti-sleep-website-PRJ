// Sample data for charts (replace with real data from your backend)
const blinksData = {
    labels: ['08:00', '08:15', '08:30', '08:45', '09:00', '09:15', '09:30'],
    datasets: [{
        label: 'Blinks Per Minute',
        data: [15, 18, 12, 20, 25, 10, 22],
        borderColor: 'rgba(234, 110, 110, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
    }]
};

const headMovementsData = {
    labels: ['08:00', '08:15', '08:30', '08:45', '09:00', '09:15', '09:30'],
    datasets: [{
        label: 'Head Tilts',
        data: [2, 3, 1, 4, 5, 2, 3],
        backgroundColor: 'rgba(234, 128, 128, 0.2)',
        borderColor: 'rgba(199, 25, 25, 1)',
        borderWidth: 1
    }]
};

// Blinks Chart
new Chart(document.getElementById('blinksChart'), {
    type: 'line',
    data: blinksData,
    options: { responsive: true, maintainAspectRatio: false }
});

// Head Movements Chart
new Chart(document.getElementById('headMovementsChart'), {
    type: 'bar',
    data: headMovementsData,
    options: { responsive: true, maintainAspectRatio: false }
});

// Simulate real-time updates (example)
setInterval(() => {
    const status = Math.random() > 0.5 ? 'Connected' : 'Disconnected';
    const alert = Math.random() > 0.7 ? 'Drowsiness Detected!' : 'Not drowsy';
    document.getElementById('connectionStatus').textContent = status;
    document.getElementById('connectionStatus').className = status === 'Connected' ? 'badge bg-success' : 'badge bg-danger';
    document.getElementById('currentAlert').textContent = alert;
    document.getElementById('currentAlert').className = alert === 'No Drowsiness' ? 'badge bg-warning' : 'badge bg-danger';
}, 5000);