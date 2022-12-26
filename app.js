// JavaScript for the web app

// Get the data for the DOW in January and December 2021
const januaryData = [
    { date: '2021-01-01', close: 31270.18 },
    { date: '2021-01-04', close: 31234.64 },
    // Additional data points for January 2021 go here
];

const decemberData = [
    { date: '2021-12-01', close: 31464.19 },
    { date: '2021-12-02', close: 31472.90 },
    // Additional data points for December 2021 go here
];

// Set up the chart using Chart.js
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: januaryData.map(d => d.date),
        datasets: [{
                label: 'January 2021',
                data: januaryData.map(d => d.close),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'December 2021',
                data: decemberData.map(d => d.close),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value) {
                        return '$' + value;
                    },
                },
            }, ],
        },
    },
});