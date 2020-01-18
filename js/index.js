import {data, data2, d1, d2, d3, d4} from '../data/data.js';

anychart.onDocumentReady (function () {

    // Подготовка данных для графиков
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
    let mainTooltipConf = () => chart.tooltip ()
        .format ("{%seriesName} {%value} ({%yPercentOfCategory}{decimalsCount:2}%)");
    mainTooltipConf ();

    // configure labels on the y-axis
    chart.yAxis ().labels ().format ("{%value}");

    // set the chart title
    chart.title (`Сводная статистика лидов 
    проекта «Лензабор» за 2017-2019 годы`);

    // set the container id
    chart.container ("container");

    const getKeyByValue = (object, value) => Object.keys (object).find (key => object[key] === value);

    // configire drilldown
    let configDrillDown = (e) => {
        let tmplButton = document.getElementById ('tmpl').content.cloneNode (true);
        let message = e.iterator.getIndex ();
        let value = e.iterator.get ('value');
        let key = getKeyByValue (data[message], value);

        document.body.append (tmplButton);
        let button = document.querySelector ('button');

        dataSet.data (data2[message][key]);

        // set the chart title
        chart.title (`Статистика раздела «${key}» 
        за ${data[message]['month']} год`);

        // configure tooltips
        chart.tooltip ().format ("{%seriesName} {%value}");

        // возврат на главный экран, удаление кнопки
        button.addEventListener ('click', (e) => {

            dataSet.data (data);
            button.remove ();

            // configure tooltips
            mainTooltipConf ()
        });
    };

    chart.listen ('pointClick', function (e) {
        configDrillDown (e);
    });

    // initiate drawing the chart
    chart.draw ();

});
