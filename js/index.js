anychart.onDocumentReady (function () {

    // create a data set
    let values = ["Калькулятор", "Заявки", "Запрос КП", "Звонки"];
    let [d1, d2, d3, d4] = values;

    // create data
    let data = [
        {month: "2017", [d1]: 120, [d2]: 132, [d3]: 22, [d4]: 960},
        {month: "2018", [d1]: 143, [d2]: 148, [d3]: 16, [d4]: 981},
        {month: "2019", [d1]: 153, [d2]: 141, [d3]: 24, [d4]: 1139},
    ];

    let data2 = [
        // 2017 год
        {
            // Калькулятор
            [d1]:
                [{month: "Январь", [d1]: 6}, {month: "Февраль", [d1]: 5},
                    {month: "Март", [d1]: 3}, {month: "Апрель", [d1]: 0},
                    {month: "Май", [d1]: 37}, {month: "Июнь", [d1]: 24},
                    {month: "Июль", [d1]: 13}, {month: "Август", [d1]: 16},
                    {month: "Сентябрь", [d1]: 6}, {month: "Октябрь", [d1]: 6},
                    {month: "Ноябрь", [d1]: 4}, {month: "Декабрь", [d1]: 0}
                ],
            // Заявки
            [d2]:
                [{month: "Январь", [d2]: 10}, {month: "Февраль", [d2]: 12},
                    {month: "Март", [d2]: 1}, {month: "Апрель", [d2]: 0},
                    {month: "Май", [d2]: 23}, {month: "Июнь", [d2]: 18},
                    {month: "Июль", [d2]: 20}, {month: "Август", [d2]: 26},
                    {month: "Сентябрь", [d2]: 5}, {month: "Октябрь", [d2]: 12},
                    {month: "Ноябрь", [d2]: 3}, {month: "Декабрь", [d2]: 2}
                ],
            // Запрос КП
            [d3]:
                [{month: "Январь", [d3]: 1}, {month: "Февраль", [d3]: 2},
                    {month: "Март", [d3]: 2}, {month: "Апрель", [d3]: 6},
                    {month: "Май", [d3]: 2}, {month: "Июнь", [d3]: 0},
                    {month: "Июль", [d3]: 4}, {month: "Август", [d3]: 2},
                    {month: "Сентябрь", [d3]: 2}, {month: "Октябрь", [d3]: 1},
                    {month: "Ноябрь", [d3]: 0}, {0: "Декабрь", [d3]: 0},
                ],
            // Звонки
            [d4]:
                [{month: "Январь", [d4]: 25}, {month: "Февраль", [d4]: 34},
                    {month: "Март", [d4]: 58}, {month: "Апрель", [d4]: 133},
                    {month: "Май", [d4]: 206}, {month: "Июнь", [d4]: 148},
                    {month: "Июль", [d4]: 133}, {month: "Август", [d4]: 73},
                    {month: "Сентябрь", [d4]: 79}, {month: "Октябрь", [d4]: 55},
                    {month: "Ноябрь", [d4]: 8}, {0: "Декабрь", [d4]: 8},
                ]
        },
        // 2018 год
        {
            // Калькулятор
            [d1]:
                [{month: "Январь", [d1]: 11}, {month: "Февраль", [d1]: 2},
                    {month: "Март", [d1]: 14}, {month: "Апрель", [d1]: 19},
                    {month: "Май", [d1]: 40}, {month: "Июнь", [d1]: 21},
                    {month: "Июль", [d1]: 16}, {month: "Август", [d1]: 14},
                    {month: "Сентябрь", [d1]: 6}, {month: "Октябрь", [d1]: 0},
                    {month: "Ноябрь", [d1]: 0}, {month: "Декабрь", [d1]: 0}
                ],
            // Заявки
            [d2]:
                [{month: "Январь", [d2]: 4}, {month: "Февраль", [d2]: 1},
                    {month: "Март", [d2]: 13}, {month: "Апрель", [d2]: 16},
                    {month: "Май", [d2]: 37}, {month: "Июнь", [d2]: 25},
                    {month: "Июль", [d2]: 19}, {month: "Август", [d2]: 20},
                    {month: "Сентябрь", [d2]: 12}, {month: "Октябрь", [d2]: 1},
                    {month: "Ноябрь", [d2]: 0}, {month: "Декабрь", [d2]: 0}
                ],
            // Запрос КП
            [d3]:
                [{month: "Январь", [d3]: 0}, {month: "Февраль", [d3]: 3},
                    {month: "Март", [d3]: 1}, {month: "Апрель", [d3]: 3},
                    {month: "Май", [d3]: 3}, {month: "Июнь", [d3]: 2},
                    {month: "Июль", [d3]: 1}, {month: "Август", [d3]: 2},
                    {month: "Сентябрь", [d3]: 1}, {month: "Октябрь", [d3]: 0},
                    {month: "Ноябрь", [d3]: 0}, {0: "Декабрь", [d3]: 0},
                ],
            // Звонки
            [d4]:
                [{month: "Январь", [d4]: 30}, {month: "Февраль", [d4]: 30},
                    {month: "Март", [d4]: 60}, {month: "Апрель", [d4]: 138},
                    {month: "Май", [d4]: 229}, {month: "Июнь", [d4]: 169},
                    {month: "Июль", [d4]: 132}, {month: "Август", [d4]: 57},
                    {month: "Сентябрь", [d4]: 83}, {month: "Октябрь", [d4]: 50},
                    {month: "Ноябрь", [d4]: 0}, {0: "Декабрь", [d4]: 3},
                ]
        },
        // 2019 год
        {
            // Калькулятор
            [d1]:
                [{month: "Январь", [d1]: 6}, {month: "Февраль", [d1]: 6},
                    {month: "Март", [d1]: 11}, {month: "Апрель", [d1]: 25},
                    {month: "Май", [d1]: 29}, {month: "Июнь", [d1]: 13},
                    {month: "Июль", [d1]: 18}, {month: "Август", [d1]: 16},
                    {month: "Сентябрь", [d1]: 15}, {month: "Октябрь", [d1]: 9},
                    {month: "Ноябрь", [d1]: 2}, {month: "Декабрь", [d1]: 3}
                ],
            // Заявки
            [d2]:
                [{month: "Январь", [d2]: 5}, {month: "Февраль", [d2]: 8},
                    {month: "Март", [d2]: 10}, {month: "Апрель", [d2]: 24},
                    {month: "Май", [d2]: 38}, {month: "Июнь", [d2]: 13},
                    {month: "Июль", [d2]: 10}, {month: "Август", [d2]: 17},
                    {month: "Сентябрь", [d2]: 6}, {month: "Октябрь", [d2]: 5},
                    {month: "Ноябрь", [d2]: 4}, {month: "Декабрь", [d2]: 1}
                ],
            // Запрос КП
            [d3]:
                [{month: "Январь", [d3]: 2}, {month: "Февраль", [d3]: 0},
                    {month: "Март", [d3]: 0}, {month: "Апрель", [d3]: 2},
                    {month: "Май", [d3]: 8}, {month: "Июнь", [d3]: 1},
                    {month: "Июль", [d3]: 5}, {month: "Август", [d3]: 2},
                    {month: "Сентябрь", [d3]: 2}, {month: "Октябрь", [d3]: 2},
                    {month: "Ноябрь", [d3]: 0}, {0: "Декабрь", [d3]: 0},
                ],
            // Звонки
            [d4]:
                [{month: "Январь", [d4]: 21}, {month: "Февраль", [d4]: 53},
                    {month: "Март", [d4]: 67}, {month: "Апрель", [d4]: 152},
                    {month: "Май", [d4]: 202}, {month: "Июнь", [d4]: 133},
                    {month: "Июль", [d4]: 168}, {month: "Август", [d4]: 127},
                    {month: "Сентябрь", [d4]: 87}, {month: "Октябрь", [d4]: 78},
                    {month: "Ноябрь", [d4]: 30}, {0: "Декабрь", [d4]: 21},
                ]
        }
    ];

    let dataSet = anychart.data.set (data);

    // map the data
    let seriesData_1 = dataSet.mapAs ({x: 'month', value: d1});
    let seriesData_2 = dataSet.mapAs ({x: 'month', value: d2});
    let seriesData_3 = dataSet.mapAs ({x: 'month', value: d3});
    let seriesData_4 = dataSet.mapAs ({x: 'month', value: d4});

    // create a chart
    let chart = anychart.bar ();

    // enable the value stacking mode
    chart.yScale ().stackMode ("value");

    // create area series, set the data
    let series1 = chart.bar (seriesData_1);
    let series2 = chart.bar (seriesData_2);
    let series3 = chart.bar (seriesData_3);
    let series4 = chart.bar (seriesData_4);

    series1.name (d1);
    series2.name (d2);
    series3.name (d3);
    series4.name (d4);

    // configure tooltips
    chart.tooltip ().format ("{%seriesName} {%value} ({%yPercentOfCategory}{decimalsCount:2}%)");

    // configure labels on the y-axis
    chart.yAxis ().labels ().format ("{%value}");

    // set the chart title
    chart.title (`Сводная статистика лидов 
    проекта «Лензабор» за 2017-2019 годы`);

    // set the container id
    chart.container ("container");

    const getKeyByValue = (object, value) => Object.keys (object).find (key => object[key] === value);

    // configire drilldown
    chart.listen ('pointClick', function (e) {
        let message = e.iterator.getIndex ();
        let value = e.iterator.get ('value');
        let key = getKeyByValue (data[message], value);

        dataSet.data (data2[message][key]);
        // // set the chart title

        chart.title (`Статистика раздела «${key}» 
        за ${data[message]['month']} год`);

        // configure tooltips
        chart.tooltip ().format ("{%seriesName} {%value}");
    });

    // initiate drawing the chart
    chart.draw ();
});
