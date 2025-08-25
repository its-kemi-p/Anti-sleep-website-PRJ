document.addEventListener('DOMContentLoaded', () => {
    const blinksChartEl = document.getElementById('liveBlinksChart');
    const headChartEl = document.getElementById('liveHeadMovementsChart');
    const connBadge = document.getElementById('liveConnectionStatus');
    const alertBadge = document.getElementById('liveCurrentAlert');
    const tbody = document.querySelector('#liveSessionTable tbody');

    // Only run if live status elements exist
    if (!blinksChartEl || !headChartEl || !connBadge || !alertBadge || !tbody) return;

    // Initialize charts
    const blinksCtx = blinksChartEl.getContext('2d');
    const liveBlinksChart = new Chart(blinksCtx, {
        type: 'line',
        data: { labels:['08:00','08:15','08:30'], datasets:[{ label:'Blinks', data:[0,0,0], borderColor:'red', fill:true }]},
        options: { responsive:true, maintainAspectRatio:false }
    });

    const headCtx = headChartEl.getContext('2d');
    const liveHeadMovementsChart = new Chart(headCtx, {
        type: 'bar',
        data: { labels:['08:00','08:15','08:30'], datasets:[{ label:'Head Tilts', data:[0,0,0], backgroundColor:'blue'}]},
        options:{ responsive:true, maintainAspectRatio:false }
    });

    // Update live badges, charts, and table every 3 seconds
    setInterval(() => {
        const connected = Math.random() > 0.1;
        const drowsy = Math.random() > 0.7;

        // Badges
        connBadge.textContent = connected ? 'Connected' : 'Disconnected';
        connBadge.className = connected ? 'badge bg-success' : 'badge bg-danger';

        alertBadge.textContent = drowsy ? 'Drowsiness Detected!' : 'No Drowsiness';
        alertBadge.className = drowsy ? 'badge bg-danger' : 'badge bg-warning text-dark';

        // Charts
        liveBlinksChart.data.datasets[0].data = liveBlinksChart.data.datasets[0].data.map(() => Math.floor(Math.random()*30));
        liveBlinksChart.update();

        liveHeadMovementsChart.data.datasets[0].data = liveHeadMovementsChart.data.datasets[0].data.map(() => Math.floor(Math.random()*5));
        liveHeadMovementsChart.update();

        // Table
        tbody.innerHTML = '';
        for(let i=0; i<5; i++){
            const date = new Date();
            tbody.innerHTML += `<tr>
                <td>${date.toISOString().split('T')[0]}</td>
                <td>${Math.floor(Math.random()*2+1)} hours</td>
                <td>${Math.floor(Math.random()*5)}</td>
                <td>${Math.random()>0.5 ? 'Safe' : 'Alert'}</td>
            </tr>`;
        }
    }, 3000);
});
