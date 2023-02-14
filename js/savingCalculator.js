function inputs() {
    var currentTickets = document.getElementById("current-tickets").value;
    var costTickets = document.getElementById("cost-ticket").value;
    var targetDeflection = document.getElementById("target-deflection").value;
    var targetProductivity = document.getElementById("target-productivity").value;

    // document.getElementById("demo").innerHTML = "You selected: " + currentTickets;
    // document.getElementById("demo2").innerHTML =  costTickets;
    // document.getElementById("demo3").innerHTML = "You selected: " + targetDeflection + "%";
    // document.getElementById("demo4").innerHTML = "You selected: " + targetProductivity + "%";


    const ticketsDeflected = parseFloat((currentTickets * targetDeflection) / 100);
    document.getElementById("result1").innerHTML = ticketsDeflected.toLocaleString('de-DE', { minimumFractionDigits: 0 }); "123.456"

    const ticketsAfterDeflection = (currentTickets - ticketsDeflected);

    const savingsDeflection = (ticketsDeflected * costTickets);
    document.getElementById("result2").innerHTML = "$ " + (parseInt(savingsDeflection)).toLocaleString('en-IN', { minimumFractionDigits: 2 }); "123,456.00";

    const savingsProductivity = (targetProductivity * costTickets) / 100 * ticketsAfterDeflection;
    document.getElementById("result3").innerHTML = "$ " + (parseInt(savingsProductivity)).toLocaleString('en-IN', { minimumFractionDigits: 2 }); "123,456.00";

    const totalSavings = parseFloat(savingsDeflection) + parseFloat(savingsProductivity);
    document.getElementById("result4").innerHTML = "$ " + (parseInt(totalSavings)).toLocaleString('en-IN', { minimumFractionDigits: 2 }); "123,456.00";


    const currentlyTotal = (currentTickets * costTickets);
    const withQuark = (currentlyTotal - totalSavings);


    if (currentlyTotal && withQuark && savingsDeflection && savingsProductivity && totalSavings && costTickets && ticketsAfterDeflection && currentTickets && ticketsDeflected) {
        document.getElementById("save-pdf").style.visibility = "visible"
        document.getElementById("show_results").click()
    }

    return [currentlyTotal, withQuark, savingsDeflection, savingsProductivity, totalSavings, costTickets, ticketsAfterDeflection, currentTickets, ticketsDeflected]



}


function seeChart() {

    document.getElementById("chart-01").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart"></canvas>`;

    const inputsFinished = inputs();
    const NUMBER_DEFLECTION_QUARK = { quark: inputsFinished[2] };

    const ctx = document.getElementById('myChart');

    new Chart(ctx,
        {
            type: 'bar',
            data: {
                datasets: [

                    {
                        label: 'Saving Just From Deflection',
                        data: NUMBER_DEFLECTION_QUARK,
                        backgroundColor: [
                            'rgba(67, 160, 71, 0.2)',
                        ],
                        borderColor: [
                            'rgb(67, 160, 71)',
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }

                },
                responsive: true,
            },
        },

    );




}



function seeChart2() {
    document.getElementById("chart-02").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart2"></canvas>`;



    const inputsFinished = inputs();
    const NUMBER_PRODUCTIVITY_QUARK = { quark: inputsFinished[3] };

    const ctx = document.getElementById('myChart2');
    new Chart(ctx,

        {
            type: 'bar',
            data: {
                datasets: [

                    {
                        label: 'Saving Just From Increased Productivity',
                        data: NUMBER_PRODUCTIVITY_QUARK,
                        backgroundColor: [
                            'rgba(67, 160, 71, 0.2)',
                        ],
                        borderColor: [
                            'rgb(67, 160, 71)',
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        },
    );


}


function seeChart3() {

    document.getElementById("chart-03").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart3"></canvas>`;


    const inputsFinished = inputs();
    const TOTAL_SAVINGS = { 'Total Saving From Using Both Modules': inputsFinished[4] };

    const ctx = document.getElementById('myChart3');

    new Chart(ctx,

        {
            type: 'bar',
            data: {
                datasets: [

                    {
                        label: 'Total Saving From Using Both Modules',
                        data: TOTAL_SAVINGS,
                        backgroundColor: [
                            'rgba(67, 160, 71, 0.2)',
                        ],
                        borderColor: [
                            'rgb(67, 160, 71)',
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        },
    );


}


function seeChart4() {
    document.getElementById("chart-04").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart4"></canvas>`;

    const inputsFinished = inputs();

    const ctx = document.getElementById('myChart4');
    new Chart(ctx,

        {
            type: 'bar',
            data: {
                labels: ['Saving From Deflection', 'Saving From Increased Productivity', 'Total Saving from Using Both Modules'],
                datasets: [
                    {
                        label: 'Savings Generated by Quark.ai',
                        backgroundColor: 'rgba(67, 160, 71, 0.2)',
                        borderColor: 'rgb(67, 160, 71)',
                        pointBackgroundColor: "#535353",
                        data: [inputsFinished[2], inputsFinished[3], inputsFinished[4]],
                        borderWidth: 1,
                        borderRadius: 30,
                        borderSkipped: false,
                        barThickness: 70,
                        maxBarThickness: 100,
             
                    },
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';

                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Savings Generated by Quark.ai'
                },

                scales: {
                    y: {
                        ticks: {
                            callback: value => `$ ${value}`
                        }
                    },
                }
            }
        },
    );




}

function seeChart5() {
    document.getElementById("chart-05").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart5"></canvas>`;


    const inputsFinished = inputs();
    const SAVINGS_ONLY_DEFLECTION = {
        '10%': ((inputsFinished[0] * 10) / 100),
        '20%': ((inputsFinished[0] * 20) / 100),
        '30%': ((inputsFinished[0] * 30) / 100),
        '40%': ((inputsFinished[0] * 40) / 100),
        '50%': ((inputsFinished[0] * 50) / 100),
    };


    const ctx = document.getElementById('myChart5');
    new Chart(ctx,

        {
            type: 'line',
            data: {
                datasets: [

                    {
                        label: 'Savings Only from Deflection',
                        data: SAVINGS_ONLY_DEFLECTION,
                        backgroundColor: [
                            'rgba(67, 160, 71, 0.2)',
                        ],
                        borderColor: [
                            'rgb(67, 160, 71)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,

                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        },
    );


}


function seeChart6() {
    document.getElementById("chart-06").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart6"></canvas>`;

    const inputsFinished = inputs();
    const ticketRemaining = (parseFloat(inputsFinished[7]) - parseFloat(inputsFinished[8]));
    const productivity = inputsFinished[5] * ticketRemaining;

    const SAVINGS_ONLY_PRODUCTIVITY = {
        '10%': ((productivity * 10) / 100),
        '20%': ((productivity * 20) / 100),
        '30%': ((productivity * 30) / 100),
        '40%': ((productivity * 40) / 100),
        '50%': ((productivity * 50) / 100),
    };

    const ctx = document.getElementById('myChart6');
    new Chart(ctx,

        {
            type: 'line',
            data: {
                datasets: [

                    {
                        label: 'Savings Only from Increased Productivity',
                        data: SAVINGS_ONLY_PRODUCTIVITY,
                        backgroundColor: [
                            'rgba(67, 160, 71, 0.2)',
                        ],
                        borderColor: [
                            'rgb(67, 160, 71)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,

                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        },
    );


}



function seeChart7() {
    document.getElementById("chart-07").innerHTML = ` <canvas class="quark_chart chart-container-ex" id="myChart7"></canvas>`;

    const inputsFinished = inputs();

    const deflection = (inputsFinished[5] * inputsFinished[7])
    //saving deflected =  current tickets (inputsFinished[7] ) * porcentaje   * cost per ticket ( inputsFinished[5] )

    const productivity = inputsFinished[5] * inputsFinished[7];
    // cost per tickets ( inputsFinished[5] )  * porcentaje  productivity * tickets remaining deflection (current tickets inputsFinished[7]  - tickets deflected  ( current ticket inputsFinished[7] * porcentaje deflected)) 
    //  inputsFinished[5] * tenporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTen)


    const tenporcent = parseFloat(10 / 100)
    const twentyporcent = parseFloat(20 / 100)
    const thirtyporcent = parseFloat(30 / 100)
    const fourtyporcent = parseFloat(40 / 100)
    const fiftyporcent = parseFloat(50 / 100)

    const ticketDeflectedTen = parseFloat(inputsFinished[7] * tenporcent)
    const ticketDeflectedTwenty = parseFloat(inputsFinished[7] * twentyporcent)
    const ticketDeflectedThirty = parseFloat(inputsFinished[7] * thirtyporcent)
    const ticketDeflectedFourty = parseFloat(inputsFinished[7] * fourtyporcent)
    const ticketDeflectedFifty = parseFloat(inputsFinished[7] * fiftyporcent)


    const SAVINGS_TOTAL_10 = {
        '10%': parseFloat(deflection * tenporcent) + parseFloat(parseFloat(inputsFinished[5] * tenporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTen)),
        '20%': parseFloat(deflection * tenporcent) + parseFloat(parseFloat(inputsFinished[5] * twentyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTen)),
        '30%': parseFloat(deflection * tenporcent) + parseFloat(parseFloat(inputsFinished[5] * thirtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTen)),
        '40%': parseFloat(deflection * tenporcent) + parseFloat(parseFloat(inputsFinished[5] * fourtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTen)),
        '50%': parseFloat(deflection * tenporcent) + parseFloat(parseFloat(inputsFinished[5] * fiftyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTen)),

    };


    const SAVINGS_TOTAL_20 = {
        '10%': parseFloat(deflection * twentyporcent) + parseFloat(parseFloat(inputsFinished[5] * tenporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTwenty)),
        '20%': parseFloat(deflection * twentyporcent) + parseFloat(parseFloat(inputsFinished[5] * twentyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTwenty)),
        '30%': parseFloat(deflection * twentyporcent) + parseFloat(parseFloat(inputsFinished[5] * thirtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTwenty)),
        '40%': parseFloat(deflection * twentyporcent) + parseFloat(parseFloat(inputsFinished[5] * fourtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTwenty)),
        '50%': parseFloat(deflection * twentyporcent) + parseFloat(parseFloat(inputsFinished[5] * fiftyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedTwenty)),

    };



    const SAVINGS_TOTAL_30 = {
        '10%': parseFloat(deflection * thirtyporcent) + parseFloat(parseFloat(inputsFinished[5] * tenporcent) * parseFloat(inputsFinished[7] - ticketDeflectedThirty)),
        '20%': parseFloat(deflection * thirtyporcent) + parseFloat(parseFloat(inputsFinished[5] * twentyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedThirty)),
        '30%': parseFloat(deflection * thirtyporcent) + parseFloat(parseFloat(inputsFinished[5] * thirtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedThirty)),
        '40%': parseFloat(deflection * thirtyporcent) + parseFloat(parseFloat(inputsFinished[5] * fourtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedThirty)),
        '50%': parseFloat(deflection * thirtyporcent) + parseFloat(parseFloat(inputsFinished[5] * fiftyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedThirty)),
    };


    const SAVINGS_TOTAL_40 = {
        '10%': parseFloat(deflection * fourtyporcent) + parseFloat(parseFloat(inputsFinished[5] * tenporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFourty)),
        '20%': parseFloat(deflection * fourtyporcent) + parseFloat(parseFloat(inputsFinished[5] * twentyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFourty)),
        '30%': parseFloat(deflection * fourtyporcent) + parseFloat(parseFloat(inputsFinished[5] * thirtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFourty)),
        '40%': parseFloat(deflection * fourtyporcent) + parseFloat(parseFloat(inputsFinished[5] * fourtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFourty)),
        '50%': parseFloat(deflection * fourtyporcent) + parseFloat(parseFloat(inputsFinished[5] * fiftyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFourty)),
    };



    const SAVINGS_TOTAL_50 = {
        '10%': parseFloat(deflection * fiftyporcent) + parseFloat(parseFloat(inputsFinished[5] * tenporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFifty)),
        '20%': parseFloat(deflection * fiftyporcent) + parseFloat(parseFloat(inputsFinished[5] * twentyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFifty)),
        '30%': parseFloat(deflection * fiftyporcent) + parseFloat(parseFloat(inputsFinished[5] * thirtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFifty)),
        '40%': parseFloat(deflection * fiftyporcent) + parseFloat(parseFloat(inputsFinished[5] * fourtyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFifty)),
        '50%': parseFloat(deflection * fiftyporcent) + parseFloat(parseFloat(inputsFinished[5] * fiftyporcent) * parseFloat(inputsFinished[7] - ticketDeflectedFifty)),
    };

    const ctx = document.getElementById('myChart7');
    new Chart(ctx,

        {
            type: 'line',
            data: {
                datasets: [


                    {
                        label: '10%',
                        data: SAVINGS_TOTAL_10,
                        backgroundColor: [
                            'rgba(30, 136, 229, 0.2)',
                        ],
                        borderColor: [
                            'rgb(30, 136, 229)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,


                    },
                    {
                        label: '20%',
                        data: SAVINGS_TOTAL_20,
                        backgroundColor: [
                            'rgba(67, 160, 71, 0.3)',
                        ],
                        borderColor: [
                            'rgb(67, 160, 71)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,

                    },
                    {
                        label: '30%',
                        data: SAVINGS_TOTAL_30,
                        backgroundColor: [
                            'rgba(186, 104, 200, 0.2)',
                        ],
                        borderColor: [
                            'rgb(186, 104, 200)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,

                    },

                    {
                        label: '40%',
                        data: SAVINGS_TOTAL_40,
                        backgroundColor: [
                            'rgba(242, 113, 28, 0.2)',
                        ],
                        borderColor: [
                            'rgb(242, 113, 28)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,
                    },



                    {
                        label: '50%',
                        data: SAVINGS_TOTAL_50,
                        backgroundColor: [
                            'rgba(222, 38, 38, 0.2)',
                        ],
                        borderColor: [
                            'rgb(222, 38, 38)',
                        ],
                        borderWidth: 1,
                        tension: 0.1,
                        fill: false,
                    },
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Total Savings as function of both Deflection and Increased Productivity'
                    },
                },
            },
        }
    );


}








    //new Chart(ctx,
    // {
    //     type: 'bar',
    //     data: {
    //         datasets: [
    //             {
    //                 label: 'Cost',
    //                 data: NUMBER_COST,

    //             },
    //             {
    //                 label: 'Saving from Deflection',
    //                 data: NUMBER_DEFLECTION,

    //             },
    //             {
    //                 label: 'Savings from increased productivity',
    //                 data: NUMBER_PRODUCTIVITY,

    //             },
    //         ],
    //     },
    //     options: {
    //         plugins: {
    //             title: {
    //                 display: true,
    //                 text: 'Calculate Your Support Costs and Potential Savings'
    //             },
    //         },
    //         responsive: true,
    //         scales: {
    //             x: {
    //                 stacked: true,
    //             },
    //             y: {
    //                 stacked: true
    //             }
    //         }
    //     }
    // },

