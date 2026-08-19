const barCanvas = document.getElementById("barChart");

if (barCanvas) {

    new Chart(barCanvas, {
        type: "bar",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                label: "Amount",
                data: [income, expense]
            }]
        }
    });

}

const pieCanvas = document.getElementById("pieChart");

if (pieCanvas) {

    new Chart(pieCanvas, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: values
            }]
        }
    });

}

const doughnutCanvas = document.getElementById("doughnutChart");

if (doughnutCanvas) {

    new Chart(doughnutCanvas, {
        type: "doughnut",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                data: [income, expense]
            }]
        }
    });

}