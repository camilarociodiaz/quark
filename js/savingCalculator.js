function inputs () {
    var currentTickets = document.getElementById("current-tickets").value;
    var costTickets = document.getElementById("cost-ticket").value;
    var targetDeflection = document.getElementById("target-deflection").value;
    var targetProductivity = document.getElementById("target-productivity").value;

    document.getElementById("demo").innerHTML = "You selected: " + currentTickets;
    document.getElementById("demo2").innerHTML = "You selected: $" + costTickets;
    document.getElementById("demo3").innerHTML = "You selected: " + targetDeflection + "%";
    document.getElementById("demo4").innerHTML = "You selected: " + targetProductivity + "%";

 
}

console.log(currentTickets)

const ticketsDeflected = (currentTickets * targetDeflection) / 100;
document.getElementById("result1").innerHTML = "Result: " + ticketsDeflected;

const ticketsAfterDeflection = (currentTickets - ticketsDeflected);
document.getElementById("result5").innerHTML = " Result: " + ticketsAfterDeflection;

const savingsDeflection = (ticketsDeflected * costTickets);
document.getElementById("result2").innerHTML = "Result: " + savingsDeflection;

const savingsProductivity = (targetProductivity * costTickets) / 100 * ticketsAfterDeflection;
document.getElementById("result3").innerHTML = "Result: " + savingsProductivity;

const totalSavings = parseFloat(savingsDeflection) + parseFloat(savingsProductivity);
document.getElementById("result4").innerHTML = "Result: " + totalSavings;


const currentlyTotal = (currentTickets * costTickets);
const withQuark = (currentlyTotal - totalSavings);

console.log(ticketsDeflected)
console.log(ticketsAfterDeflection)

const NUMBER_COST = { currently: 1800000, quark: 1071000 };
const NUMBER_DEFLECTION = { currently: 0, quark: 540000 };
const NUMBER_PRODUCTIVITY = { currently: 0, quark: 189000 };





function seeChart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: 'Cost',
                    data: NUMBER_COST,

                },
                {
                    label: 'Saving from Deflection',
                    data: NUMBER_DEFLECTION,

                },
                {
                    label: 'Savings from increased productivity',
                    data: NUMBER_PRODUCTIVITY,

                },
            ],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Calculate Your Support Costs and Potential Savings'
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
}